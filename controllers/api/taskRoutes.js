const router = require("express").Router();
const { Task, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Use withAuth middleware to prevent access to route
//display tasks
router.get("/", withAuth, async (req, res) => {
  try {
    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.render("task", {
      tasks,
      logged_in: true,
      whichPartial: function () {
        return "createtask";
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to display individual task
router.get("/:id", withAuth, async (req, res) => {
  try {
    const tasksData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const tasks = tasksData.map((task) => task.get({ plain: true }));

    const taskData = await Task.findByPk(req.params.id, {});

    if (!taskData) {
      res.status(404).json({ message: "No task found with that id!" });
      return;
    }
    const task = taskData.get({ plain: true });

    res.render("task", {
      task,
      tasks,
      logged_in: true,
      whichPartial: function () {
        return "taskdetails";
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to create task
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newTask = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to update task
router.put("/:id", withAuth, async (req, res) => {
  try {
    const taskData = await Task.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//route to delete a task
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

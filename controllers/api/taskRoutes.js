const router = require("express").Router();
const { Task, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Use withAuth middleware to prevent access to route
//display tasks
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    console.log("userId", req.session.user_id);
    const taskData = await Task.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    console.log(taskData);
    const tasks = taskData.map((task) => task.get({ plain: true }));
    console.log(tasks);
    // console.log(user.tasks[1]);

    res.render("tasklist_with_createtask", {
      tasks,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/:id",  async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const task = taskData.get({ plain: true });
    //return task;
    /*res.render("TaskView", {
      ...Task,
      logged_in: req.session.logged_in,
    });*/
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    console.log("trying post");
    const newTask = await Task.create({
      ...req.body,
      //user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});



=======
router.delete("/:id", withAuth, async (req, res) => {

  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        //user_id: req.session.user_id,
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

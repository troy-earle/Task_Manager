const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

// Use withAuth middleware to prevent access to route
//display tasks
router.get('/tasks', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Task }],
    });

    const user = userData.get({ plain: true });

    res.render('taskList', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/Tasks/:id', withAuth, async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const Task = taskData.get({ plain: true });

    res.render('TaskView', {
      ...Task,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




router.post('/', withAuth, async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!taskData) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }

    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;

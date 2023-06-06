const router = require("express").Router();

//render homepage
router.get("/", async (req, res) => {
  try {
    const projects = "hello world";
    res.render("homepage", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/api/tasks");
    return;
  }

  res.render("login");
});

module.exports = router;

const router = require("express").Router();
// const { Project, User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    //   const projectData = await Project.findAll({
    //     include: [
    //       {
    //         model: User,
    //         attributes: ["name"],
    //       },
    //     ],
    //   });

    //   // Serialize data so the template can read it
    //   const projects = projectData.map((project) => project.get({ plain: true }));

    //   // Pass serialized data and session flag into template
    const projects = "hello world";
    res.render("homepage", {
      projects,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
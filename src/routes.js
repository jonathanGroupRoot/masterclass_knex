const express = require("express");
const router = express.Router();
const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectController");


router
    // USERS
    .get("/user", UserController.index)
    .post("/user", UserController.create)
    .put("/user/:id", UserController.update)
    .delete("/user/:id", UserController.delete)

    // PROJECTS
    .get("/projects", ProjectController.index)
    .post("/projects/:user_id", ProjectController.create)
    .patch("/projects/:id", ProjectController.update)
    .delete("/projects/:id", ProjectController.delete)

module.exports = router;
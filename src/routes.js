const express = require("express");
const router = express.Router();
const UserController = require("./controllers/UserController");


router.get("/user", UserController.index);
router.post("/user", UserController.create);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

module.exports = router;
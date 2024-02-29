const express = require("express");
const router = express.Router();

const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/user-controller");

router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
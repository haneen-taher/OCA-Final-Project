const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authMiddleware.verifyToken, authController.logoutUser);
router.get("/users", authMiddleware.verifyToken, authController.getAllUsers);

module.exports = router;

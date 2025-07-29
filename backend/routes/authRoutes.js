const express = require("express");

const router = express.Router();

//Auth Routes
router.post("/register", registerUser); //Register user
router.post("/login", loginUser);    //login user
router.get("/profile", protect, getUserProfile);    //Get user Profile
router.put("/profile", protect, updateUserProfile); //Update Profile

module.exports = router;


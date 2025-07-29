const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create JWT token
const generateToken = (useriD) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {};

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {};

// @desc GET user profile
// @route GET /api/auth/profile
// @access Private (Requires JWT)
const getUserProfile = async (req, res) => {};

// @desc Update user profile
// @route Pust /api/auth/profile
// @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };

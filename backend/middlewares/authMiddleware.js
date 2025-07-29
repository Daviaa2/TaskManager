const jwt = require("jsonwebtoken");
const USer = require("../models/User");

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token = req.header.authorization;
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; //Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch {
    res.status(401).json({ message: "token failed", error: error.message });
  }
};

//Middleware for Admin only access

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied, ADMINS ONLY!!! " });
  }
};

module.exports = { protect, adminOnly };

import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Hardcoded users (Week 1 only)
const USERS = [
  { id: 1, username: "admin", password: "admin123", role: "Admin" },
  { id: 2, username: "viewer", password: "viewer123", role: "Viewer" },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({
    message: "Login successful",
    token,
    role: user.role,
  });
});

export default router;

import express from "express";
import { authenticateToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Both roles
router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Dashboard OK", user: req.user });
});

router.get("/predictions", authenticateToken, (req, res) => {
  res.json({ message: "Predictions OK", user: req.user });
});

// Admin only
router.get("/data-management", authenticateToken, authorizeRoles("Admin"), (req, res) => {
  res.json({ message: "Data Management OK (Admin)", user: req.user });
});

router.get("/model-control", authenticateToken, authorizeRoles("Admin"), (req, res) => {
  res.json({ message: "Model Control OK (Admin)", user: req.user });
});

export default router;

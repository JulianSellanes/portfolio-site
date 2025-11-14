import express from "express";
import authMiddleware from "../middlewares/auth.js";
import adminOnly from "../middlewares/authAdmin.js";
import {
    getAllProjects,
    getProjectById,
    createProject,
    updateProjectById,
    deleteProjectById,
    deleteAllProjects
} from "../controllers/project.js";

// Router /projects
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", getAllProjects);
router.get("/:id", authMiddleware, adminOnly, getProjectById);
router.post("/", authMiddleware, adminOnly, createProject);
router.put("/:id", authMiddleware, adminOnly, updateProjectById);
router.delete("/:id", authMiddleware, adminOnly, deleteProjectById);
router.delete("/", authMiddleware, adminOnly, deleteAllProjects);

export default router;
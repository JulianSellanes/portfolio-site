import express from "express";
import authMiddleware from "../middlewares/auth.js";
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
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProjectById);
router.delete("/:id", deleteProjectById);
router.delete("/", deleteAllProjects);

export default router;
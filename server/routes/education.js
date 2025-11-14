import express from "express";
import authMiddleware from "../middlewares/auth.js";
import adminOnly from "../middlewares/authAdmin.js";
import {
    getAllEducations,
    getEducationById,
    createEducation,
    updateEducationById,
    deleteEducationById,
    deleteAllEducations
} from "../controllers/education.js";

// Router /education
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", getAllEducations);
router.get("/:id", authMiddleware, adminOnly, getEducationById);
router.post("/", authMiddleware, adminOnly, createEducation);
router.put("/:id", authMiddleware, adminOnly, updateEducationById);
router.delete("/:id", authMiddleware, adminOnly, deleteEducationById);
router.delete("/", authMiddleware, adminOnly, deleteAllEducations);

export default router;
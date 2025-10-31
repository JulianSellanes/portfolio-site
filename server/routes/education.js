import express from "express";
import authMiddleware from "../middlewares/auth.js";
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
router.get("/:id", getEducationById);
router.post("/", createEducation);
router.put("/:id", updateEducationById);
router.delete("/:id", deleteEducationById);
router.delete("/", deleteAllEducations);

export default router;
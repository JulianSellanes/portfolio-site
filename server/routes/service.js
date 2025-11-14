import express from "express";
import authMiddleware from "../middlewares/auth.js";
import adminOnly from "../middlewares/authAdmin.js";
import {
    getAllServices,
    getServiceById,
    createService,
    updateServiceById,
    deleteServiceById,
    deleteAllServices
} from "../controllers/service.js";

// Router /services
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", getAllServices);
router.get("/:id", authMiddleware, adminOnly, getServiceById);
router.post("/", authMiddleware, adminOnly, createService);
router.put("/:id", authMiddleware, adminOnly, updateServiceById);
router.delete("/:id", authMiddleware, adminOnly, deleteServiceById);
router.delete("/", authMiddleware, adminOnly, deleteAllServices);

export default router;


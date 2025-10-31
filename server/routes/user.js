import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    deleteAllUsers,
    loginUser
} from "../controllers/user.js";

// Router /users
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.post("/", createUser);
router.put("/:id", authMiddleware, updateUserById);
router.delete("/:id", authMiddleware, deleteUserById);
router.delete("/", authMiddleware, deleteAllUsers);
router.post("/login", loginUser);

export default router;
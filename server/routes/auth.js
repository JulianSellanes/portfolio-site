import express from "express";
import {
    login,
    register,
    logout
} from "../controllers/auth.js";

// Router /auth
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

export default router;
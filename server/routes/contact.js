import express from "express";
import authMiddleware from "../middlewares/auth.js";
import adminOnly from "../middlewares/authAdmin.js";
import {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById,
    deleteAllContacts
} from "../controllers/contact.js";

// Router /contacts
const router = express.Router();

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get("/", authMiddleware, adminOnly, getAllContacts);
router.get("/:id", authMiddleware, adminOnly, getContactById);
router.post("/", authMiddleware, createContact);
router.put("/:id", authMiddleware, adminOnly, updateContactById);
router.delete("/:id", authMiddleware, adminOnly, deleteContactById);
router.delete("/", authMiddleware, adminOnly, deleteAllContacts);

export default router;
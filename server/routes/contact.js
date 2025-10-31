import express from "express";
import authMiddleware from "../middlewares/auth.js";
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
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.post("/", createContact);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);
router.delete("/", deleteAllContacts);

export default router;
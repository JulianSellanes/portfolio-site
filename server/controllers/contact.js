import ContactModel from "../models/contact.js";

// Create CRUD operations for Contact

// Get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new contact
export const createContact = async (req, res) => {
    try {
        const newContact = new ContactModel(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a contact by ID
export const updateContactById = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a contact by ID
export const deleteContactById = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all contacts
export const deleteAllContacts = async (req, res) => {
    try {
        const deletedContacts = await ContactModel.deleteMany();
        res.status(200).json({ message: "All contacts deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
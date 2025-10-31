import EducationModel from "../models/education.js";

// Create CRUD operations for Education

// Get all educations
export const getAllEducations = async (req, res) => {
    try {
        const educations = await EducationModel.find();
        res.status(200).json(educations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a education by ID
export const getEducationById = async (req, res) => {
    try {
        const education = await EducationModel.findById(req.params.id);
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new education
export const createEducation = async (req, res) => {
    try {
        const newEducation = new EducationModel(req.body);
        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a education by ID
export const updateEducationById = async (req, res) => {
    try {
        const updatedEducation = await EducationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEducation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a education by ID
export const deleteEducationById = async (req, res) => {
    try {
        const deletedEducation = await EducationModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Education deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all educations
export const deleteAllEducations = async (req, res) => {
    try {
        const deletedEducations = await EducationModel.deleteMany();
        res.status(200).json({ message: "All educations deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
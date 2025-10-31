import ProjectModel from "../models/project.js";

// Create CRUD operations for Project

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new project
export const createProject = async (req, res) => {
    try {
        const newProject = new ProjectModel(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a project by ID
export const updateProjectById = async (req, res) => {
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a project by ID
export const deleteProjectById = async (req, res) => {
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all projects
export const deleteAllProjects = async (req, res) => {
    try {
        const deletedProjects = await ProjectModel.deleteMany();
        res.status(200).json({ message: "All projects deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
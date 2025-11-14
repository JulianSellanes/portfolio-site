import ServiceModel from "../models/service.js";

// Create CRUD operations for Service

// Get all services
export const getAllServices = async (req, res) => {
    try {
        const services = await ServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a service by ID
export const getServiceById = async (req, res) => {
    try {
        const service = await ServiceModel.findById(req.params.id);
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new service
export const createService = async (req, res) => {
    try {
        const newService = new ServiceModel(req.body);
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a service by ID
export const updateServiceById = async (req, res) => {
    try {
        const updatedService = await ServiceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a service by ID
export const deleteServiceById = async (req, res) => {
    try {
        const deletedService = await ServiceModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all services
export const deleteAllServices = async (req, res) => {
    try {
        const deletedServices = await ServiceModel.deleteMany();
        res.status(200).json({ message: "All services deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


import UserModel from "../models/user.js";
import generateToken from "../utils/jwt.js";

// Create CRUD operations for User

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new user
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();

        const token = generateToken(savedUser);

        res.status(201).json({message: "User registered successfuly", user: savedUser, token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a user by ID
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(updatedUser);
    } catch (error) {
       res.status(500).json({ message: error.message });
    }
}

// Delete a user by ID
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all users
export const deleteAllUsers = async (req, res) => {
    try {
        const deletedUsers = await UserModel.deleteMany();
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Login user
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email})

        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });
        
        const token = generateToken(user)

        return res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
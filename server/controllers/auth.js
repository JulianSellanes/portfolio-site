import UserModel from "../models/user.js";
import generateToken from "../utils/jwt.js";

// Login
export const login = async (req, res) => {
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

// Register
export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = await UserModel.create({username, email, password});
        const token = generateToken(user);
        return res.status(201).json({ message: "User registered successfully", user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Logout
export const logout = async (req, res) => {
    try {
        return res.status(200).json({ message: "Signed out" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
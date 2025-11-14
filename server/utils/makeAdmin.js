import mongoose from "mongoose";
import "dotenv/config";
import UserModel from "../models/user.js";

const username = process.argv[2];

if (!username) {
    console.error("Error: Username is required");
    console.log("Usage: node scripts/make-admin.js <username>");
    process.exit(1);
}

if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI environment variable is not set");
    process.exit(1);
}

async function makeAdmin() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        // Find user by username
        const user = await UserModel.findOne({ username });

        if (!user) {
            console.error(`Error: User with username "${username}" not found`);
            await mongoose.connection.close();
            process.exit(1);
        }

        // Check if user is already admin
        if (user.role === "admin") {
            console.log(`User "${username}" is already an admin`);
            await mongoose.connection.close();
            process.exit(0);
        }

        // Update user role to admin
        user.role = "admin";
        user.updated = new Date();
        await user.save();

        console.log(`✓ Successfully granted admin role to user: ${username}`);
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error("Error:", error.message);
        await mongoose.connection.close();
        process.exit(1);
    }
}

makeAdmin();


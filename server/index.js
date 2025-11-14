import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "MongoDB connection error: "));
connection.once("open", () => { console.log("Connected to MongoDB"); });

import projectRoutes from "./routes/project.js";
import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import educationRoutes from "./routes/education.js";
import serviceRoutes from "./routes/service.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to My Portfolio application." });
// });

app.listen(3000);   

console.log("Server running at http://localhost:3000/");
import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    school: String,
    degree: String,
    years: String,
});

export default mongoose.model("Education", educationSchema);
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    tags: [String],
    link: String,
});

export default mongoose.model("Project", projectSchema);
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    tags: [String],
    link: String,
});

export default mongoose.model("Project", projectSchema);
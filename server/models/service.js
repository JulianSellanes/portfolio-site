import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: String,
    img: String,
    techs: [String],
});

export default mongoose.model("Service", serviceSchema);


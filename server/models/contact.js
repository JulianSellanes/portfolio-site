import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    message: String,
});

export default mongoose.model("Contact", contactSchema);
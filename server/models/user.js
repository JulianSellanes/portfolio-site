import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    created: Date,
    updated: Date,
});

userSchema.pre("save", async function (next){
    const now = new Date();
    
    if(this.isNew) {
        this.created = now;
        this.updated = now;
    } else if(this.isModified()) {
        this.updated = now;
    }
    
    if(this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model("User", userSchema);
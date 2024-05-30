import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }, 
    isDoctor: {
        type: Boolean,
        default: false
    }, 
    notification: {
        type: Array,
        default: []
    },
    seenNotification: {
        type: Array,
        default: []
    }
}, {timestamps: true});

const user = mongoose.model('User', userSchema);
export default user;
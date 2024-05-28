import mongoose, { Schema } from "mongoose";

const doctorSchema = new mongoose.Schema({
    userId: {
        type: String
    }, 
    firstName: {
        type: String,
        required: [true, "Firstname is required"]
    },
    lastName: {
        type: String,
        required: [true, "Lastname is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    }, 
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    lastName: {
        type: String,
        required: [true, "Lastname is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    website: {
        type: String
    },
    specialization: {
        type: String,
        required: [true, "Specialization is required"]
    },
    experience: {
        type: String, 
        required: [true, "Experience is required"]
    },
    feesPerConsultation: {
        type: Number,
        required: [true, "Fee is required"]
    }, 
    timings: {
        type: Object,
        required: [true, "Work timing is required"]
    }
}, {timestamps: true})

const doctorModel = mongoose.model('docotr', doctorSchema);
export default doctorModel; 
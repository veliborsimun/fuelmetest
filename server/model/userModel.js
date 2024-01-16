import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city:{ 
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    phone: {
        type: String, 
        },
    createdDate: {
        type: Date,
    } 
})

export default mongoose.model("User", userSchema);
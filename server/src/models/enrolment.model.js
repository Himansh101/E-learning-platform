import mongoose from "mongoose";

const enrolmentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },

    stripeSessionId:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Enrolment = mongoose.model("Enrolment", enrolmentSchema)
import mongoose, { mongo } from "mongoose";
let educationSchema=new mongoose.Schema({
    degree:String,
    college:String,
    specialization:String
})
let Education=mongoose.model('education',educationSchema)
export {Education}
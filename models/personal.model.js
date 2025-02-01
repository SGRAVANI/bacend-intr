import mongoose, { mongo } from "mongoose";
let personalDataSchema=new mongoose.Schema({
    name:String,
    email:String,
    profile_summary:String
})
let PersonalData=mongoose.model('personaldata',personalDataSchema)
export {PersonalData}
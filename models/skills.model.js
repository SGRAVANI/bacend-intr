import mongoose, { mongo } from "mongoose";
let skillSchema=new mongoose.Schema({
   languages:String,
   frontend:String,
   backend:String,
   css:String,
   database:String
})
let Skills=mongoose.model('skill',skillSchema)
export {Skills}


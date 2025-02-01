import express from "express"
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import { PersonalData } from "./models/personal.model.js"
let app=express()
app.use(cors({
    origin:['http://localhost:5173','https://frontend-inter-zeta.vercel.app'],
    credentials:true
}))
app.use(express.json())
async function  conectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    }
    catch(e)
    {
        console.log("error occured in database")
    }
}

app.use((err,req,res,next)=>{
    if(err)
    {
        return res.status(500).json({msg:"internal server error"})
    }
})
app.get("/personal",async (req,res)=>{
    try{
        let data=await PersonalData.find({})
        console.log(data)
        return res.status(200).json({data:data,msg:"retrieved"})
    }
    catch(e)
    {
    return res.status(400).json({msg:"can not find data"})
    }

})
app.listen(process.env.PORT,async ()=>{
    await conectDB()
    console.log("server is listening on port ",process.env.PORT)
})
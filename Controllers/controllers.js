import { Education } from "../models/education.model.js"
import { Skills } from "../models/skills.model.js"
async function  getEducationDetail(req,res) {
    let data=await Education.find({})
    if(data)
    {
        return res.status(200).json({data:data,msg:"retieved"})
    }
    else{
        return res.status(500).json({msg:"cound not fetch data"})
    }
}

async function  getSkillDetail(req,res) {
    let data=await Skills.find({}).select({_id:0})
    if(data)
    {
        return res.status(200).json({data:data,msg:"retieved"})
    }
    else{
        return res.status(500).json({msg:"cound not fetch data"})
    }
}
export {getEducationDetail,getSkillDetail}
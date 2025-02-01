import { getEducationDetail,getSkillDetail } from "../Controllers/controllers.js";
import express from"express"
let UserRouter=express.Router()
UserRouter.get("/education",getEducationDetail)
UserRouter.get("/skills",getSkillDetail)
export {UserRouter}
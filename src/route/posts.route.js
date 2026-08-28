const express=require('express')
const router=express.Router();
const jwt=require('jsonwebtoken');
const model=require('../db/model/db.model');
require("dotenv").config();
router.post("/create",async(req,res)=>{
 const token=req.cookies.cookie;
 if(!token)
 {
return res.status(401).json({
    message:"unautorized"
})

 }
 try
 {
    const decoded=jwt.verify(token,process.env.jwt_secret);
    const user=await model.findOne({
    _id:decoded.id
    });
    console.log(user);
            return res.status(200).json({
            message: "Authorized successfully",
            user: decoded
        });
 }
 catch(error)
 {
    console.log("this is an error",error);
    return res.status(401).json({
            message: "Invalid or expired token"
        });
 }
})



module.exports=router;
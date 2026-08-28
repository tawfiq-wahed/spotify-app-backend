const express=require('express');
const router=express.Router();
const authcontrollers=require("../controllers/auth.controller");

router.post("/register",authcontrollers.registeruser);
router.get("/test",(req,res)=>
{
    console.log(req.cookies);
    res.json({
        message:"token route ",
        cookies:req.cookies
    })
})
module.exports=router;

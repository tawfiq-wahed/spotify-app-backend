const express=require('express');
const router=express.Router();
const authcontrollers=require("../controllers/auth.controllers")
router.post("/register",authcontrollers.registeruser);
router.post("/login",authcontrollers.loginuser);
router.post("/logout",authcontrollers.logout);
module.exports=router;
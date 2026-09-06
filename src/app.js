const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const authroute=require("./route/auth.route")
const musicroute=require("./route/music.route")
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authroute)
app.use("/api/music",musicroute)
module.exports=app;
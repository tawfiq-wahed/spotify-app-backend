const express=require('express');
const app=express();
const authrouter=require("./route/auth.route");
const postrouter=require("./route/posts.route");
const cookieparser=require("cookie-parser");
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth",authrouter);
app.use("/api/posts",postrouter);
module.exports=app;



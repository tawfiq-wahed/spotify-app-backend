const model=require("../db/model/schema");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
async function registeruser(req,res)
{
   const {username,email,password,role}=req.body

const isalreadyexist=await model.findOne({
    $or:[
        {username},
        {email}
    ]
})
if(isalreadyexist)
{
    res.status(409).json({
       message: ("user already exist")
    })
}
const hash=await bcrypt.hash(password,10);

const user= await model.create({
    username,
    email,
    password:hash,
    role
})

const token=jwt.sign({
    id:user._id,
    role:user.role
},
process.env.jwtsecret);
res.cookie("cookie",token);
res.status(201).json({
    message:"token created successfully",
    user:
    {
        id:user.id,
        username:user.username,
        email:user.email,
        role:user.role
        
    }
})

}
async function loginuser(req,res)
{
  const{username,email,password}=req.body;
  const user=await model.findOne({
    $or:[
        {username},
        { email}
     ]
})
if(!user)
{
   return res.status(401).json({
        message:"user not found"
    })
}
const result=await bcrypt.compare(password,user.password);
if(!result)
{
    return res.status(401).json({
        message:"invalid credentials"
    })
}
const token=jwt.sign(
    {
        id:user._id,
        role:user.role
    },process.env.jwtsecret
)

res.cookie("cookie",token);
res.status(200).json({
   id:user._id,
   username:user.username,
   email:user.email,
   role:user.role


})
}
async function logout(req,res)
{
    res.clearCookie("cookie");
     return res.status(401).json({
        message:"logout successfully"
    })
}
module.exports={registeruser,loginuser,logout};
const model=require("../db/model/db.model");
const jwt=require("jsonwebtoken");
async function registeruser(req,res)
{
  const{username,email,password}=req.body;
  const isalreadyexist=await model.findOne(
    {
      email
    }
  )
  if(isalreadyexist)
  {
    return res.status(409).json({
      message:" user already exists"
    })
  }
  
  const user=await model.create({
    username,email,password
  })
const token=jwt.sign({
id:user._id
},process.env.jwt_secret)
res.cookie("cookie",token);
res.status(201).json(
    {
        message: "token created successfully",
        user
    }

)
}

module.exports={registeruser};

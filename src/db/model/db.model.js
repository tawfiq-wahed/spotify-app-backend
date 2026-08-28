const mongoose=require('mongoose');
const schema=new mongoose.Schema(
    {
        username:String,
        email:
        {
            type:String,
            unique:true

        },
        password:String
    }
)
const model=mongoose.model("typo",schema);
module.exports=model;
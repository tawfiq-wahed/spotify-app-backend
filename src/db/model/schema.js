const mongoose=require('mongoose');
const schema=new mongoose.Schema(
    {
        username:{
        type:String,
        required:true,
        unique:true
        },
        email:
        {
            type:String,
            required:true,
            unique:true
        },
        password:
        {
            type:String,
            required:true
        },
        role:
        {
            type:String,
            enum: ["user","artist"],
            default:"user"
        }

    })
    const model=mongoose.model("Spotify",schema);
    module.exports=model

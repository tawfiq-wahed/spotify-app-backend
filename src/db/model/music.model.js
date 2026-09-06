const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    uri:
    {
        type:String,
        required:true
    },
    title:
    {
        type:String,
        required:true
    },
    artist:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Spotify",
        required:true
    }
})
const musicmodel = mongoose.model("Music", schema);

module.exports = musicmodel;


const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    musics:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Music",
        required:true
    }],
    artist:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Spotify",
        required:true
    }
})
const albummodel = mongoose.model("Album", schema);
module.exports = albummodel;
const musicmodel=require("../db/model/music.model.js")
const {uploadfile}=require('../services/storage.service.js')
const albummodel=require("../db/model/album.model.js")
const jwt = require("jsonwebtoken");

async function createmusic(req,res)
{  
    
  const {title}=req.body;
  const file = req.file;
  const result=await uploadfile(file.buffer.toString('base64'));
  const againschema=await musicmodel.create({
    uri:result.url,
    title,
    artist:req.user.id
  })
  res.status(201).json({
    message:"music created successfully",
    music:
    {
        music:againschema._id,
        uri:againschema.uri,
        title:againschema.title,
        artist:againschema.artist,

    }
  })

}
async function createalbum(req, res) {

   
   

        const { title, musicids } = req.body;

        const album = await albummodel.create({
            title,
            musics: musicids,
            artist: req.user.id
        });

        return res.status(201).json({
            message: "album created successfully",
            album: {
                id: album._id,
                title: album.title,
                music: album.music,
                artist: album.artist
            }
        });
    }
    const getal = async (req, res) => {

        const all = await musicmodel.find().skip(2).limit(1).populate("artist", "username email ") ;
        res.status(200).json({
            message: "albums retrieved successfully",
            musics: all
        });
    }
    const getalb = async (req, res) => {

        const all = await albummodel.find().select("title artist").populate("artist", "username email ") ;

        res.status(200).json({
            message: "albums retrieved successfully",
            albums: all
        });
    }
    const getmusics = async (req, res) => {
        const id1= req.params.id;
        const musics = await musicmodel.findById(id1).populate("artist", "username email ");
        res.status(200).json({
            message: "musics retrieved successfully",
            musics
        });
    }

module.exports={createmusic,createalbum,getal,getalb,getmusics};
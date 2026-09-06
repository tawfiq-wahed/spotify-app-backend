const express=require('express');

const router=express.Router();

const middleware=require("../middleware/auth.middleware.js")
const musiccontroller=require("../controllers/music.controller")
const multer=require('multer');
const upload=multer({ storage: multer.memoryStorage() });
router.post("/upload",upload.single("music"),middleware.auth,musiccontroller.createmusic)
router.post("/album",middleware.auth,musiccontroller.createalbum)
router.get("/getal",middleware.authuser,musiccontroller.getal)
router.get("/getalbum",middleware.authuser,musiccontroller.getalb);
router.get("/getmusics/:id",middleware.authuser,musiccontroller.getmusics);
module.exports=router;

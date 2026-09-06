
const { ImageKit } = require("@imagekit/nodejs/index.js");

const imagekitinstance = new ImageKit({
    privateKey: process.env.imgkit
});

async function uploadfile(file) {
    const result = await imagekitinstance.files.upload({
        file,
        fileName: "music-" + Date.now(),
        folder: "Backend/music"
    });

    return result;
}

module.exports = { uploadfile };
const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./assets/images")
    },
    filename: (res, file, cb) => {
        let filetype = "";

        if (filetype.mimetype === "image/png") {
            filetype = "png"
        } else if (filetype.mimetype === "image/jpg" || filetype.mimetype === "image/jpeg") {
            filetype = "jpg"
        }

        cb(null, file.originalname.replace(/ /g, "_"))
    }
})

const upload = multer({ storage: storage })

module.exports = upload
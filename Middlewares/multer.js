const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './temp')
    },
    filename: function (req, file, cb) {
        // console.log(file, file.mimetype)
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "application/x-mspublisher" ) {
            cb(null, file.originalname)
        }
        else {
          cb( new Error("Unsupported file type"))
        }
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }
})

module.exports = upload
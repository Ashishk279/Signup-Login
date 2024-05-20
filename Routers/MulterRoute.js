const { Router } = require('express');
const router = Router();
const upload = require('../Middlewares/multer')
const multerController = require("../Controllers/multerController")

router.post('/upload', upload.single('file'), multerController.uploadFile);
router.get("/file/:filename", multerController.getFile);

module.exports = router
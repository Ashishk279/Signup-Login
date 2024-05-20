const path = require("path")
module.exports.uploadFile = async (req, res) => {
    try {
        res.status(200).json("File Uploaded");
    }
    catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports.getFile = async (req, res) => {
    try {
        const fileName = req.params.filename;
        const filePath = path.join(__dirname, '../temp', fileName);
        
        res.status(200).sendFile(filePath)
    } catch (err) {
        res.status(400).send('File not found ' + err.message)
    }
}
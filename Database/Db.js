const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/profile");
    console.log("Database connected successfully.")
}

main().catch(err => console.log(err.message))

module.exports = mongoose;
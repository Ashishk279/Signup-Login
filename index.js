const express = require('express');
require('dotenv').config()
require('./Database/Db');
const signUpRouter = require('./Routers/UserRoute')
const multer = require("./Routers/MulterRoute")
const axios = require("./Routers/axios")
const app = express();
const Port = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/v1/', signUpRouter)
app.use('/api/v1/multer', multer)
app.use('/api/v1/axios', axios)

app.listen(Port, ()=>{
    console.log(`Server start on the port: ${Port}`)
})
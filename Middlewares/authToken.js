const jwt = require('jsonwebtoken')
const Messages = require('../Messages/index')
require('dotenv').config();

const verifyAuthToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) throw new Error(Messages.INVALID_AUTHORIZATION);
    
    try{
        const data= jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        console.log(data.user.user)  
        req.user = data.user.user 
        next();
    }catch(err){
        res.status(400).json({ success: false, error: err.message });
    }
}

module.exports = verifyAuthToken;
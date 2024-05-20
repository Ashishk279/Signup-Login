const { Router } = require('express');
const signUpController = require("../Controllers/UserController")
const verifyAuthToken = require('../Middlewares/authToken')
const router = Router();

router.post('/signup', signUpController.sign_up)
router.patch('/update', verifyAuthToken, signUpController.updateProfile)
router.get('/getprofile', verifyAuthToken, signUpController.getProfile)

module.exports = router
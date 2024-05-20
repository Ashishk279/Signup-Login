const SignUp = require("../Models/SignUp")
const encrypt = require("../Utilities/index")
const signUp = require("../Validations/index")
const Messages = require('../Messages/index')

require('dotenv').config()

module.exports.sign_up = async (req, res) => {
    const { username, phoneNumber, email, password } = req.body;
    try {
        const result = signUp.validate({ username, phoneNumber, email, password });
        if (result.error) {
            return res.status(401).json({ message: result.error.details.map(detail => detail.message) });
        }
        const user = await SignUp.findOne({ email, phoneNumber })
        console.log(user)
        if (user) throw new Error(Messages.ALREADY_EXISTS);

        const hash = await encrypt(req.body.password);
        console.log(hash)
        const profile = await SignUp.create({ username, phoneNumber, email, password: hash });

        const payload = {
            user: {
                user: profile.id
            }
        }
        console.log(payload)
        const authToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3days' });
        res.status(200).json({ authToken: authToken })

    } catch (err) {
        res.status(400).json(err.message)
    }

}

module.exports.updateProfile = async (req, res) => {
    const { phoneNumber, email } = req.body;
    try {
        const user = await SignUp.findById(req.user)
        if (!user) throw new Error(Messages.INVALID_USER);

        const updateProfile = await SignUp.updateOne({ email, phoneNumber })
        res.status(200).json({ success: true, data: updateProfile });

    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

module.exports.getProfile = async (req, res) => {
    try {
        const user = await SignUp.findById(req.user);
        res.status(200).json({ user })
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }


}




const Joi = require('joi');
const signUp = Joi.object({
    // username: Joi.string().alphanum().min(3).max(30).required().messages({"any.required": "Username is invalid."}),
    username: Joi.string().alphanum().min(3).max(30).required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports = signUp;
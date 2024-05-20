const bcrypt = require('bcrypt');

// const currentTime = new Date()
// const date = 3 * 24 * 60 * 60 * 1000;
// const time = new Date(currentTime.getTime() + date)
// const timeInSeconds = time.getTime() / 1000;
// console.log(timeInSeconds)

const encrypt = async (password) => {
    const salt = await bcrypt.genSalt();
    const psd = await bcrypt.hash(password, salt)
    return psd;
}

module.exports = encrypt;
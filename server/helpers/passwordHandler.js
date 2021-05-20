const bcrypt = require('bcryptjs')

function hashPassword(password) {
    console.log("bisa")
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparedPassword(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword)
}

module.exports = {
    hashPassword,
    comparedPassword
}
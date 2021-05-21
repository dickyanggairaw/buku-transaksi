var jwt = require('jsonwebtoken');

function getToken(user) {
    var token = jwt.sign({
        email: user.email,
        id: user.id
    }, 'shhhhh');
    return token
}

function verifyToken(token) {
    var decoded = jwt.verify(token, 'shhhhh')
    return decoded
}

module.exports = {
    getToken,
    verifyToken
}
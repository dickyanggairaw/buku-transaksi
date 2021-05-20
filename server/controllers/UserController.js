const { User } = require('../models')

class Controller {
    static async register( req, res, next) {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }
}

module.exports = Controller
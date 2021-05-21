const { User } = require('../models')
const { comparedPassword } = require('../helpers/passwordHandler')
const { getToken } = require('../helpers/tokenHandler')

class Controller {
    static async register( req, res, next ) {
        try {
            const user = await User.create(req.body)
            res.status(201).json(user)
        } catch (error) {
            next(error)
        }        
    }
    static async login( req, res, next ) {
        try {
            const user = await User.findOne({
                email: req.body.email
            })
            if(user && comparedPassword(req.body.password, user.password)){
                const access_token = getToken(user)
                res.status(200).json({access_token: access_token})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller
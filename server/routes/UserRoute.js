const express = require('express')
const route = express.Router()


const { UserController } = require('../controllers')

route.post('/register', UserController.register)

module.exports = route
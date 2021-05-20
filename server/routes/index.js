const express = require('express')
const route = express.Router()
const UserRoute = require('./UserRoute')

route.get('/', (req, res) => {
    res.send("Hello World masa sih")
})

route.use('/user', UserRoute)

module.exports = route
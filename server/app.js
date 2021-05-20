const express = require('express')
const app = express()
const PORT =  process.env.PORT || 3000

const cors = require('cors')
const route = require('./routes')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(route)

app.listen(PORT, () => {
    console.log("Server Listening at Port " + PORT)
})
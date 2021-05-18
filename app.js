const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log("App listening at port " + PORT)
})
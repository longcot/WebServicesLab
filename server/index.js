const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)



app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000)
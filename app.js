const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send([
    {
        id: 0,
        name: 'Nathan'
    },
    {
        id: 1,
        name: 'Sjoerd'
    },
    {
        id: 2,
        name: 'Mark'
    }
  ]
  )
})

app.listen(5050)
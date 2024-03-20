const express = require('express')
const app = express()
const gameData = require('./routes/gameData')

const port = process.env.PORT || '3001'

app.use('/', gameData)

app.listen(port, function () {
  console.log(`Server running on ${port}`)
})

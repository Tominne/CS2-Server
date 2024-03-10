const fetch = require('node-fetch')
const express = require('express')
const app = express()

const key = process.env.key

const Options = {
  method: 'GET',
  url: 'https://www.steamwebapi.com/steam/api/items?key=FYM0OMRUM8NOVO0L&max=50',
  headers: {
    key: key,
  },
}

async function gameData() {
  try {
    const response = await fetch(Options)
    console.log(process.env.RapidAPI)
    console.log(process.env.RapidAPIHost)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

app.get('/skins', async (req, res) => {
  try {
    const data = await gameData()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = { Options, gameData }

const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const key = process.env.key

router.get('/', async (req, res) => {
  try {
    const response = await fetch(
      'https://www.steamwebapi.com/steam/api/items?key=FYM0OMRUM8NOVO0L&max=50'
    )
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router

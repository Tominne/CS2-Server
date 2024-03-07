const express = require('express')
const router = express.Router()
const { addThought } = require('../api/logThoughts.js')
const Thought = require('../db/thoughts.js')
const { addPfp } = require('../api/logPfp.js')
const Pfp = require('../db/pfp.js')

router.post('/thoughts', addThought)
router.post('/pfp', addPfp)

router.get('/pfp/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const pfp = await Pfp.findOne({ userId: userId })
    if (!pfp) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(pfp)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find({})
    res.status(200).json(thoughts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'internal server error' })
  }
})

module.exports = router

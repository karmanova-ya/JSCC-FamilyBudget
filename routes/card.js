const express = require('express')
const router = express.Router()

const CardService = require('../services/card-service')

router.get('/all', async (req, res) => {
  const cards = await CardService.findAll()
  res.render('list', { items: cards })
})

router.get('/:id', async (req, res) => {
  const card = await CardService.find(req.params.id)
  res.render('data', { data: card })
})

router.post('/', async (req, res) => {
  const card = await CardService.add(req.body)
  res.send(card)
})

router.delete('/:id', async (req, res) => {
  const card = await CardService.del(req.params.id)
  res.send(card)
})

module.exports = router

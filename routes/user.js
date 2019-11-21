const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const CardService = require('../services/card-service')
const UserCardService = require('../services/user-card-service')

router.get('/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('list', { items: people })
})

router.get('/all/json', async (req, res) => {
  const people = await UserService.findAll()
  res.send(people)
})

router.get('/:id', async (req, res) => {
  const user = await UserService.find(req.params.id)
  res.render('data', { data: user })
})

router.get('/:id/json', async (req, res) => {
  const user = await UserService.find(req.params.id)
  if (!user) res.status(404)
  res.send(user)
})

router.post('/', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
})

router.post('/:id/cards/:cardId', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const card = await CardService.find(req.params.cardId)
  console.log(card)
  await UserCardService.addCard(user, card)

  res.send(user)
})

module.exports = router

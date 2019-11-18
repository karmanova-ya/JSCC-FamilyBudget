const express = require('express')
const router = express.Router()

const TransactionService = require('../services/transaction-service')

router.get('/all', async (req, res) => {
  const transactions = await TransactionService.findAll()
  res.render('list', { items: transactions })
})

router.get('/:id', async (req, res) => {
  const transaction = await TransactionService.find(req.params.id)
  res.render('data', { data: transaction })
})

router.post('/', async (req, res) => {
  const transaction = await TransactionService.add(req.body)
  res.send(transaction)
})

router.delete('/:id', async (req, res) => {
  const transaction = await TransactionService.del(req.params.id)
  res.send(transaction)
})

module.exports = router

const express = require('express')
const bodyParser = require('body-parser')
const CardService = require('./services/card-service')
const UserService = require('./services/user-service')

const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', { users: users })
})

app.get('/card/all', async (req, res) => {
    const cards = await CardService.findAll()
    res.render('card', { cards: cards })
})

app.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserService.find(id)
    res.send(user)
})

app.get('/card/:id', async (req, res) => {
    const id = req.params.id
    const card = await CardService.find(id)
    res.send(card)
})

app.post('/user', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

app.post('/card', async (req, res) => {
    const card = await CardService.add(req.body)
    res.send(card)
})

app.delete('/user/:id', async (req, res) => {
    await UserService.del(req.params.id)
    res.send('ok')
})

app.delete('/card/:id', async (req, res) => {
    await CardService.del(req.params.id)
    res.send('ok')
})

app.get('/user/:id/cards', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.render('card', { cards: user.cardsList })
})

app.post('/user/:id/cards', async (req, res) => {
    const userId = req.params.id
    const user = await UserService.find(userId);
    let card = await CardService.add(req.body)
    card = await CardService.find(card.id);
    card.assignTo(user);
    await UserService.update(userId, user);
    res.send(card)
})

app.listen(3000, () => {
    console.log('Server listening')
})

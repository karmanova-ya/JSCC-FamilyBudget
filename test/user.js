import test from 'ava'
import request from 'supertest'
import app from "../app"

test('Create a new user', async t => {
  t.plan(5)
  const userToCreate = {
    firstName: 'Yana',
    lastName: 'Karmanova',
    eMail: 'poi@hjoi.ok',
    phoneNumber: 123456,
    cardsList: []
  }

  const res = await request(app)
    .post('/user')
    .send(userToCreate)

  t.is(res.status, 200)
  t.is(res.body.firstName, userToCreate.firstName)
  t.is(res.body.lastName, userToCreate.lastName)
  t.is(res.body.eMail, userToCreate.eMail)
  t.is(res.body.phoneNumber, userToCreate.phoneNumber)
})

test('Fetch an user', async t => {
  t.plan(3)
  const userToCreate = {
    firstName: 'Yana',
    lastName: 'Karmanova',
    eMail: 'poi@hjoi.ok',
    phoneNumber: 123456,
    cardsList: []
  }

  const yanaUserCreated = (await request(app)
    .post('/user')
    .send(userToCreate)).body

  const fetchRes = await request(app).get(`/user/${yanaUserCreated._id}/json`)
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/user/${yanaUserCreated._id}/json`)
  t.is(fetchResJson.status, 200)

  const yanaUserFetched = fetchResJson.body
  t.deepEqual(yanaUserFetched, yanaUserCreated)
})

test('Delete user', async t => {
  t.plan(3)

  const userToCreate = {
    firstName: 'Yana',
    lastName: 'Karmanova',
    eMail: 'poi@hjoi.ok',
    phoneNumber: 123456,
    cardsList: []
  }

  const yanaUserCreated = (await request(app)
    .post('/user')
    .send(userToCreate)).body

  const deleteRes = await request(app).delete(`/user/${yanaUserCreated._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  const fetch = await request(app).get(`/person/${yanaUserCreated._id}/json`)

  t.is(fetch.status, 404)
})

test('Get list of users', async t => {
  t.plan(4)

  const userToCreate = {
    firstName: 'Yana',
    lastName: 'Karmanova',
    eMail: 'poi@hjoi.ok',
    phoneNumber: 123456,
    cardsList: []
  }

  const _ = await request(app)
    .post('/user')
    .send(userToCreate)

  const res = await request(app).get('/user/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('/user/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)
})

test('Add card to users card list', async t => {
  t.plan(4)

  const userYana = {
    firstName: 'Yana',
    lastName: 'Karmanova',
    eMail: 'poi@hjoi.ok',
    phoneNumber: 123456,
    cardsList: []
  }
  const cardN26 = {
    bankName: 'N26',
    cardNumber: 1234567812345678,
    cvv: 123,
    expDate: '2022-12-19T23:00:00.000Z'
  }

  // create an user
  const createdUser = (await request(app)
    .post('/user')
    .send(userYana)).body

  // create a card
  const createdCard = (await request(app)
    .post('/card')
    .send(cardN26)).body

  const addCardRes = await request(app)
    .post(`/user/${createdUser._id}/cards/${createdCard._id}`)

  t.is(addCardRes.status, 200)

  const cardAltered = addCardRes.body
  t.is(cardAltered.cardsList[0]._id, createdCard._id)
  t.deepEqual(cardAltered.cardsList[0], createdCard)
  t.notDeepEqual(cardAltered, createdCard)

})

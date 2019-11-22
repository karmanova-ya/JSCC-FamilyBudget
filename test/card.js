import test from 'ava'
import request from 'supertest'
import app from "../app"

test('Create a new card', async t => {
    t.plan(5)

    const cardToCreate = {
        bankName: 'N26',
        cardNumber: 1234567812345678,
        cvv: 123,
        expDate: '2022-12-19T23:00:00.000Z'
    }

    const res = await request(app)
        .post('/card')
        .send(cardToCreate)

    t.is(res.status, 200)
    t.is(res.body.bankName, cardToCreate.bankName)
    t.is(res.body.cardNumber, cardToCreate.cardNumber)
    t.is(res.body.cvv, cardToCreate.cvv)
    t.is(res.body.expDate, cardToCreate.expDate)

})

test('Fetch a card', async t => {
    t.plan(4)

    const cardToCreate = {
        bankName: 'N26',
        cardNumber: 1234567812345678,
        cvv: 123,
        expDate: '2022-12-19T23:00:00.000Z'
    }

    const n26CardCreated = (await request(app)
        .post('/card')
        .send(cardToCreate)).body

    const fetchRes = await request(app).get(`/card/${n26CardCreated._id}/json`)
    t.is(fetchRes.status, 200)

    const fetchResHtml = await request(app).get(`/card/${n26CardCreated._id}`)
    t.is(fetchResHtml.status, 200)

    const fetchResJson = await request(app).get(`/card/${n26CardCreated._id}/json`)
    t.is(fetchResJson.status, 200)

    const n26CardFetched = fetchResJson.body
    t.deepEqual(n26CardFetched, n26CardCreated)
})

test('Delete a card', async t => {
    t.plan(3)

    const cardToCreate = {
        bankName: 'N26',
        cardNumber: 1234567812345678,
        cvv: 123,
        expDate: '2022-12-19T23:00:00.000Z'
    }

    const n26CardCreated = (await request(app)
        .post('/card')
        .send(cardToCreate)).body

    const deleteRes = await request(app).delete(`/card/${n26CardCreated._id}`)
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    const fetch = await request(app).get(`/card/${n26CardCreated._id}/json`)
    t.is(fetch.status, 404)
})

test('Get list of card', async t => {
    t.plan(4)

    const cardToCreate = {
        bankName: 'N26',
        cardNumber: 1234567812345678,
        cvv: 123,
        expDate: '2022-12-19T23:00:00.000Z'
    }

    const n26CardCreated = await request(app)
        .post('/card')
        .send(cardToCreate)

    const res = await request(app).get('/card/all')
    t.is(res.status, 200)

    const resJson = await request(app).get('/card/all/json')
    t.is(resJson.status, 200)
    t.true(Array.isArray(resJson.body), 'Body should be an array')
    t.true(resJson.body.length > 0)
})

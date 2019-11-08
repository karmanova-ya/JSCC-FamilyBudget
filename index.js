const express = require('express')
// const bodyParser = require('body-parser')

// const User = require("./models/user")
// const Card = require("./models/card")
const CardService = require('./services/card-service')
const UserService = require('./services/user-service')

const app = express()

app.set('view engine', 'pug')
// app.use(bodyParser.json())

app.get('/', (req, res) => {
    // res.send('Hello')
    // res.sendFile(__dirname + '/database/cards_data.json')
    res.render('index')
})

app.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', { users: users})
})

app.get('/card/all', async (req, res) => {
    const cards = await CardService.findAll()
    res.render('card', { cards: card})
})

app.get('/user/1', async (req, res) => {
    const user = await UserService.find(1)
    res.send(user)
})





app.listen(3000, () => {
    console.log('Server listening')
})





// async function main() {

//     // console.log('**********************************\n')

//     // const yanaK = new User("Yana", "Karmanova", "yana@gmail.com", "1112222333")
//     // await UserService.add(yanaK);

//     // let users = await UserService.findAll();

//     // // ------------------------------------


//     // const n26 = new Card(users[0].firstName, users[0].lastName, users[0].id, "N26", 1234567899, 234, "02/20")
//     // n26.assignTo(users[0]);
//     // await CardService.add(n26);
//     // await UserService.saveAll(users);


//     // const db = new Card(users[0].firstName, users[0].lastName, users[0].id, "Deutsche Bank", 1122334455, 123, "07/24")
//     // db.assignTo(users[0]);
//     // await CardService.add(db);
//     // await UserService.saveAll(users);
    
//     users = await UserService.findAll();
//     const dimaK = new User("Dima", "Karmanov", "dima@gmail.com", "0999887766")
//         await UserService.add(dimaK);
    
//     const dimaN26 = new Card(dimaK, "N26", 998877, 666, "12/25")
//     const dimaDb = new Card(dimaK, "Deutsche Bank", 3344556677, 111, "05/23")
//     await UserService.saveAll(users);
    
//     dimaN26.assignTo(users[1]);
//     dimaDb.assignTo(users[1]);

//     await CardService.add(dimaN26);
//     await CardService.add(dimaDb);
//     await UserService.saveAll(users);

// }

// main()


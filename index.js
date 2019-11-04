const User = require("./models/user")
const Card = require("./models/card")
const CardService = require('./services/card-service')
const UserService = require('./services/user-service')


async function main() {

    // console.log('**********************************\n')

    const yanaK = new User("Yana", "Karmanova", "yana@gmail.com", "1112222333")
    await UserService.add(yanaK);

    let users = await UserService.findAll();

    // ------------------------------------


    const n26 = new Card(users[0].firstName, users[0].lastName, users[0].id, "N26", 1234567899, 234, "02/20")
    n26.assignTo(users[0]);
    await CardService.add(n26);
    await UserService.saveAll(users);


    const db = new Card(users[0].firstName, users[0].lastName, users[0].id, "Deutsche Bank", 1122334455, 123, "07/24")
    db.assignTo(users[0]);
    await CardService.add(db);
    await UserService.saveAll(users);

    users = await UserService.findAll();
    console.log("******* Users *******")
    console.log(users);

    const cards = await CardService.findAll();
    console.log("******* Cards *******")
    console.log(cards);

    // const dimaK = new User("Dima", "Karmanov", "dima@gmail.com", "0999887766")
    // const n26 = new Card(dimaK, "N26", 998877, 666, "12/20")
    // const db = new Card(dimaK, "Deutsche Bank", 3344556677, 111, "05/23")
}

main()


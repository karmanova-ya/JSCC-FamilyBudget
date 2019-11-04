const User = require("./models/user")
const Card = require("./models/card")
const CardService = require('./services/card-service')
const database_root = './database/family_budget.json';
const Database = require('./database')
const UserService = require('./services/user-service')
// const BankAccountService = require('./services/bankAccount-service')


// const Balance = require("./balance")
/*
async function main() {
  
    const user = await UserService.findAll()
    user.report()
    const cards = await CardService.findAll()
    cards.report()
  }
  
  main()
*/

async function main() {
    
    // console.log('**********************************\n')
    
    const dimaK = new User("Dima", "Karmanov", "dima@gmail.com", "0999887766")
    const n26 = new Card(dimaK, "N26", 998877, 666, "12/20")
    const db = new Card(dimaK, "Deutsche Bank", 33445566, 111, "05/23")
    
    await UserService.add(dimaK)

    // await UserService.del(2)

    users = await UserService.findAll()
    console.log(users)

}

main()


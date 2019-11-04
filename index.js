const User = require("./models/user")
const Card = require("./models/card")
const CardService = require('./services/card-service')
const UserService = require('./services/user-service')


async function main() {
    
    // console.log('**********************************\n')
    
    // const dimaK = new User("Dima", "Karmanov", "dima@gmail.com", "0999887766")
    // const n26 = new Card(dimaK, "N26", 998877, 666, "12/20")
    // const db = new Card(dimaK, "Deutsche Bank", 33445566, 111, "05/23")
    
    // await UserService.add(dimaK)

    // await UserService.del(2)

    users = await UserService.find(1)
    users.report()

}

main()


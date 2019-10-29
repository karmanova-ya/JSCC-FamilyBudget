
// const Chalk = require("chalk")
const database_root = './database/family_budget.json';
const User = require("./user")
const Card = require("./card")
const Database = require('./database')

// const Balance = require("./balance")
const yanaK = new User("Yana", "Karmanova", "yana@gmail.com", "1112222333");
const n26 = new Card(yanaK, "N26", 1234567, 234, "01/20");
const db = new Card(yanaK, "Deutsche Bank", 0987654, 432, "05/20");
Database.save(database_root, yanaK);
n26.expirationReminder();

const loadedFile = Database.load(database_root);
console.log(loadedFile);

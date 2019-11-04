// const Card = require("./card")
module.exports = class Balance {     //This class isn't doing anything at the moment, but it's going to be needed in the future    
    constructor(income, expense) {
        this.income = income;
        this.expense = expense;
    }

    calcRest(income, expense) {
        rest = income - expense;
        console.log("The rest is " + rest);
    }
}

// const incomeCurrency = "€";


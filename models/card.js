const chalk = require('chalk')
const user = require('./user')

module.exports = class Card {
    constructor(firstName, lastName, userId, bankName, cardNumber, cvv, expDateString, id) {
        this.firstName = firstName;
        this.userId = userId;
        this.lastName = lastName;    
        this.cardHolder = firstName + " " + lastName;
        this.bankName = bankName;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expDateString = expDateString;
        // var parts = expDateString.split("/");   //Convert to a common date format
        // var year = Number(parts[1]) + 2000;
        // this.expDate = new Date(year, parts[0]);
        this.id = id;
    }

    assignTo(user) { //Method for adding a new card to an array of current user
        user.cardsList.push(this)
        this.cardHolder = user.firstName + " " + user.lastName
        var welC = welcomeCard(this);
    }

    report(user) {  //Show cards of current user
        console.log(chalk.blue.bgRed.bold(this.cardHolder), ', you added', chalk.green(user.cl), 'bank cards\n')
    }

    expirationReminder() {  //Method that reminds of bank card renewal 3 months prior to expiration
        var date = new Date();
        var newDate = new Date(date.setMonth(date.getMonth() + 3));
        var diff = monthDiff(this.expDate, newDate)

        if (diff <= 3) {
            console.log("You need to renew your " + this.bankName + " card. The expiration date is " + this.expDateString);
        }
    }

    static create({ firstName, lastName, userId, bankName, cardNumber, cvv, expDateString }) {
        return new Card( firstName, lastName, userId, bankName, cardNumber, cvv, expDateString);
    }
}

function welcomeCard(card) {   //Method of displaying a message about adding a new card
    console.log(card.cardHolder + ", you added a new bank card\n")
}

function monthDiff(d1, d2) {    //Method for calculating the difference in months between two dates
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    var result = months <= 0 ? 0 : months;
    return result;
}

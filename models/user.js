const chalk = require('chalk')

module.exports = class User {

    constructor(firstName, lastName, eMail, phoneNumber, id, cardsList = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
        this.id = id;
        this.cardsList = cardsList;
        this.cl = this.cardsList.length;
        // this.welcomeNewUser();
    }

    welcomeNewUser() {   //A method for displaying a new user's greeting message
        console.log("Hello " + this.firstName + "! We are so happy to see you here!\n")
    }

    addCard(card) {     //Method for adding a new card to an array
        console.log('**********************************\n')
        this.cardsList.push(card);
        this.cl = this.cardsList.length;
        card.cardHolder = this.firstName + " " + this.lastName;
    }

    static create({ firstName, lastName, eMail, phoneNumber, id, cardsList }) {
        return new User(firstName, lastName, eMail, phoneNumber, id, cardsList);
    }

    report() {
        console.log('User Name: ', chalk.blue.bold(this.firstName), chalk.blue.bold(this.lastName), '\n',
            'E-mail: ', chalk.green(this.eMail), '\n',
            'Phone number: ', chalk.green(this.phoneNumber)
        )
        this.cardsList.forEach(function (element, index) {
            index += 1
            console.log('Card', index, ':', element.bankName);
        });
    }
}


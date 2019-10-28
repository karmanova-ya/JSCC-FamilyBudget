module.exports = class User {
    constructor(firstName, lastName, eMail, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
        this.cardsList = [];
        this.welcomeUser();
    }

    welcomeUser() {   //A method for displaying a new user's greeting message
        console.log("Hello " + this.firstName + "! We are so happy to see you here!")
    }

    addCard(card) {     //Method for adding a new card to an array
        this.cardsList.push(card);
        card.cardHolder = this.firstName + " " + this.lastName;
    }
}
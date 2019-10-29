module.exports = class Card{
    constructor(user, bankName, cardNumber, cvv, expDateString) {
        this.cardHolder = user.firstName + " " + user.lastName;
        this.bankName = bankName;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expDateString = expDateString;
        var parts = expDateString.split("/");   //Convert to a common date format
        var year = Number(parts[1]) + 2000;
        this.expDate = new Date(year, parts[0]);
        this.welcomeCard();
        user.addCard(this);
    }

    welcomeCard() {   //Method of displaying a message about creating a new card
        console.log(this.cardHolder + ", you added a new bank card")
    }

    expirationReminder() {  //Method that reminds of bank card renewal 3 months prior to expiration
        var date = new Date();
        var newDate = new Date(date.setMonth(date.getMonth() + 3));
        var diff = monthDiff(this.expDate, newDate)

        if (diff <= 3) {
            console.log("You need to renew your " + this.bankName + " card. The expiration date is " + this.expDateString);
        }
    }
}

function monthDiff(d1, d2) {    //Method for calculating the difference in months between two dates
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    var result = months <= 0 ? 0 : months;
    return result;
}

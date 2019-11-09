class BankAccount{
    constructor(user, bankName, iban, bic) {
        this.cardHolder = user.firstName + " " + user.lastName;
        this.bankName = bankName;
        this.iban = iban;
        this.bic = bic;
        this.welcomeBA();
    }

    welcomeBA() {     //Method of displaying a message about creating a new card
        console.log(this.cardHolder + ", you opened a new bank account")
    }
}
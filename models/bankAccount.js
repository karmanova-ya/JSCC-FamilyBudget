const mongoose = require('mongoose')

const BankAccountSchema = new mongoose.Schema({
    bankName: String,
    accountHolder: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    amount: Number
})

BankAccountSchema.plugin(require('mongoose-autopopulate'))

const BankAccountModel = mongoose.model('BankAccount', BankAccountSchema)

module.exports = BankAccountModel
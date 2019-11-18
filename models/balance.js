const mongoose = require('mongoose')

const BalanceSchema = new mongoose.Schema({
    balanceName: String,
    income: Number,
    expense: Number,
    amount: Number
})

BalanceSchema.plugin(require('mongoose-autopopulate'))

const BalanceModel = mongoose.model('Balance', BalanceSchema)

module.exports = BalanceModel
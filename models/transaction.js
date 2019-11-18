const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    category: String,
    name: String,
    summ: Number
})

TransactionSchema.plugin(require('mongoose-autopopulate'))

const TransactionModel = mongoose.model('Transaction', TransactionSchema)

module.exports = TransactionModel


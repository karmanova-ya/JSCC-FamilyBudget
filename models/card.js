const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({

    bankName: String,
    cardNumber: {
        type: Number,
        required: true,
        length: 16
    },
    cvv: {
        type: Number,
        required: true,
        length: 3
    },
    expDate: Date,
    cardHolder: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    amount: Number
})

CardSchema.plugin(require('mongoose-autopopulate'))

const CardModel = mongoose.model('Card', CardSchema)

module.exports = CardModel
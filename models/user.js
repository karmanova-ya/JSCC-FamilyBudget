const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: 2
    },

    lastName: {
        type: String,
        required: true,
        minlength: 2
    },

    eMail: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
        minlength: 7
    },

    cardsList: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Card',
        autopopulate: {
            maxDepth: 1
        }
    }],

    amount: Number
})
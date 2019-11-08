const BaseService = require('./base-service')
const CardModel = require('../models/card')

class CardService extends BaseService {
    constructor() {
        super(CardModel, `${__dirname}/../database/cards_data.json`)
    }
}

module.exports = new CardService()
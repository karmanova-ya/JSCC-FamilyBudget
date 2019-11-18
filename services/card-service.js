const BaseService = require('./base-service')
const CardModel = require('../models/card')

class CardService extends BaseService {
    model = CardModel
}

module.exports = new CardService()
const BaseService = require('./base-service')
const TransactionModel = require('../models/transaction')

class TransactionService extends BaseService {
    model = TransactionModel
}

module.exports = new TransactionService()
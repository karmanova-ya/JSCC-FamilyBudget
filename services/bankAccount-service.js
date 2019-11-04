const BaseService = require('./base-service')
const BankAccountModel = require('../models/bankAccount')

class BankAccountService extends BaseService {
    constructor() {
        super(BankAccountModel, `${__dirname}/../database/family_budget.json`)
    }
}

module.exports = new BankAccountService()
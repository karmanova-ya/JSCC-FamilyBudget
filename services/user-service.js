const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    constructor() {
        super(UserModel, `${__dirname}/../database/users_data.json`)
    }
}

module.exports = new UserService()

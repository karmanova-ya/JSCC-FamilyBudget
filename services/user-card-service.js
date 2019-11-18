const BaseService = require('./base-service')
const UserService = require('../services/user-service')
const CardService = require('../services/card-service')


class UserCardService extends BaseService {
    addCard = async function (user, card) {
        user.cardsList.push(card)
        await UserService.add(user)
        await CardService.add(card)
    }
}

module.exports = new UserCardService()
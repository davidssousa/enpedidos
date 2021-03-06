const defaultResponse = (data, statusCode = 200) => ({ data, statusCode })
const errorResponse = (message, statusCode = 400) => defaultResponse({ error: message }, statusCode)

class UsersController {
    constructor (Users) {
        this.Users = Users
    }
    getAll () {
        return this.Users.findAll({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }
    getById (params) {
        return this.Users.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }
    create (data) {
        return this.Users.create(data)
            .then(result => defaultResponse(result, 201))
            .catch(error => errorResponse(error.message))
    }
    update (data, params) {
        return this.Users.update(data, { where: params })
            .then(result => defaultResponse(result, 204))
            .catch(error => errorResponse(error.message))
    }
    delete (params) {
        return this.Users.destroy({ where: params })
            .then(result => defaultResponse(result, 204))
            .catch(error => errorResponse(error.message))
    }
}

export default UsersController

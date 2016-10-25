import UsersController from '../../../controllers/users'

describe('Controller Users', () => {
    describe('getAll()', () => {
        it('deve retornar uma lista de users', () => {
            const Users = {
                findAll: td.function()
            }
            const usersController = new UsersController(Users)
            const expectedResponse = [{ id: 1, name: 'user_1', email: 'user_1@email.com', password: '123456', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }]
            td.when(Users.findAll({})).thenResolve(expectedResponse)
            return usersController.getAll().then(response => expect(response.data).to.be.eql(expectedResponse))
        })
    })
    describe('getById(id)', () => {
        it('deve retornar um user', () => {
            const Users = {
                findOne: td.function()
            }
            const usersController = new UsersController(Users)
            const expectedResponse = { id: 1, name: 'user_1', email: 'user_1@email.com', password: '123456', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Users.findOne({ where: { id: 1 } })).thenResolve(expectedResponse)
            return usersController.getById({ id: 1 }).then(response => expect(response.data).to.be.eql(expectedResponse))
        })
    })
    describe('create(data)', () => {
        it('deve criar um user', () => {
            const Users = {
                create: td.function()
            }
            const requestBody = { name: 'user_1' }
            const usersController = new UsersController(Users)
            const expectedResponse = { id: 1, name: 'user_1', email: 'user_1@email.com', password: '123456', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Users.create(requestBody)).thenResolve(expectedResponse)
            return usersController.create(requestBody).then(response => {
                expect(response.data).to.be.eql(expectedResponse)
                expect(response.statusCode).to.be.eql(201)
            })
        })
    })
    describe('update(data, psarams)', () => {
        it('deve editar um user', () => {
            const Users = {
                update: td.function()
            }
            const requestBody = { id: 1, name: 'user_1 updated' }
            const usersController = new UsersController(Users)
            const expectedResponse = { id: 1, name: 'user_1 updated', email: 'user_1@email.com', password: '123456', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Users.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse)
            return usersController.update(requestBody, { id: 1 }).then(response => {
                expect(response.data).to.be.eql(expectedResponse)
                expect(response.statusCode).to.be.eql(204)
            })
        })
    })
    describe('delete(data, params)', () => {
        it('deve delete um user', () => {
            const Users = {
                destroy: td.function()
            }
            const usersController = new UsersController(Users)
            td.when(Users.destroy({ where: { id: 1 } })).thenResolve({})
            return usersController.delete({ id: 1 }).then(response => {
                expect(response.statusCode).to.be.eql(204)
            })
        })
    })
})

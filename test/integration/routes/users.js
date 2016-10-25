describe('Routes Users', () => {
    const Users = app.datasource.models.Users
    let fakeUser
    beforeEach(done => {
        Users.destroy({ where: {} }).then(() => Users.bulkCreate([
            { id: 1, name: 'user_1', email: 'user_1@email.com', password: '123456' }
        ]))
            .then(users => {
                fakeUser = users[0]
                done()
            })
    })
    describe('getAll()', () => {
        it('deve retornar uma lista de usuarios', (done) => {
            request
                .get('/users')
                .expect(200)
                .end((error, res) => {
                    expect(res.body[0].id).to.be.eql(1)
                    expect(res.body[0].name).to.be.eql('user_1')
                    expect(res.body[0].email).to.be.eql('user_1@email.com')
                    done(error)
                })
        })
    })
    describe('getById()', () => {
        it('deve retornar um usuario', (done) => {
            request
                .get(`/users/${fakeUser.id}`)
                .expect(200)
                .end((error, res) => {
                    expect(res.body.name).to.be.eql(fakeUser.name)
                    done(error)
                })
        })
    })
    describe('create()', () => {
        it('deve criar um usuario', (done) => {
            request
                .post(`/users`)
                .send({ id: 2, name: 'user_2', email: 'user_2@email.com', password: '123456' })
                .expect(200)
                .end((error, res) => {
                    expect(res.body.id).to.be.eql(2)
                    expect(res.body.name).to.be.eql('user_2')
                    expect(res.body.email).to.be.eql('user_2@email.com')
                    done(error)
                })
        })
    })
    describe('update()', () => {
        it('deve editar um usuario', (done) => {
            request
                .put(`/users/${fakeUser.id}`)
                .send({ id: 1, name: 'user_1 updated' })
                .expect(204)
                .end((error, res) => {
                    done(error)
                })
        })
    })
    describe('delete()', () => {
        it('deve excluir um usuario', (done) => {
            request
                .delete(`/users/${fakeUser.id}`)
                .expect(204)
                .end((error, res) => {
                    done(error)
                })
        })
    })
})

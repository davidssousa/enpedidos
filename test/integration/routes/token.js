describe('Route Token', () => {
    const Users = app.datasource.models.Users
    describe('create user para autenticacao', () => {
        beforeEach(done => {
            Users.destroy({ where: {} })
                .then(() => Users.create({
                    name: 'david',
                    email: 'david@email.com',
                    password: '12345'
                }))
                .then(done())
        })
    })
    describe('status 200', () => {
        it('deve retornar um token valido', done => {
            request.post('/token')
                .send({
                    email: 'david@email.com',
                    password: '12345'
                })
                .expect(200)
                .end((err, res) => {
                    console.log('ttttttttttttttttttttttttttttttt')
                    console.log(res.body)
                    expect(res.body).to.include.keys('token')
                    done(err)
                })
        })
    })
    describe('status 401', () => {
        it('deve retornar erro quando senha incorreta', (done) => {
            request.post('/token')
                .send({ email: 'david@email.com', password: 'SENHA_INVALIDA' })
                .expect(401)
                .end((error, res) => done(error))
        })
    })
    describe('status 401', () => {
        it('deve retornar erro quando email nao existe', (done) => {
            request.post('/token')
                .send({ email: 'EMAIL@EMAIL.COM', password: 'SENHA_INVALIDA' })
                .expect(401)
                .end((error, res) => done(error))
        })
    })
    describe('status 401', () => {
        it('deve retornar erro quando email e senha em branco', (done) => {
            request.post('/token')
                .send({ email: '', password: '' })
                .expect(401)
                .end((error, res) => done(error))
        })
    })
})

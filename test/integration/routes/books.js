describe('Routes Books', () => {
    const Books = app.datasource.models.Books
    let fakeBook
    beforeEach(done => {
        Books.destroy({ where: {} }).then(() => Books.bulkCreate([
            { id: 1, name: 'book 1' }
        ]))
            .then(books => {
                fakeBook = books[0]
                done()
            })
    })
    describe('getAll()', () => {
        it('deve retornar uma lista de livros', (done) => {
            request
                .get('/books')
                .expect(200)
                .end((error, res) => {
                    expect(res.body[0].name).to.be.eql(fakeBook.name)
                    done(error)
                })
        })
    })
    describe('getById()', () => {
        it('deve retornar um livro', (done) => {
            request
                .get(`/books/${fakeBook.id}`)
                .expect(200)
                .end((error, res) => {
                    expect(res.body.name).to.be.eql(fakeBook.name)
                    done(error)
                })
        })
    })
    describe('create()', () => {
        it('deve criar um livro', (done) => {
            request
                .post(`/books`)
                .send({ id: 2, name: 'book 2' })
                .expect(200)
                .end((error, res) => {
                    expect(res.body.name).to.be.eql('book 2')
                    done(error)
                })
        })
    })
    describe('update()', () => {
        it('deve editar um livro', (done) => {
            request
                .put(`/books/${fakeBook.id}`)
                .send({ id: 1, name: 'book 1 updated' })
                .expect(204)
                .end((error, res) => {
                    done(error)
                })
        })
    })
    describe('delete()', () => {
        it('deve excluir um livro', (done) => {
            request
                .delete(`/books/${fakeBook.id}`)
                .expect(204)
                .end((error, res) => {
                    done(error)
                })
        })
    })
})

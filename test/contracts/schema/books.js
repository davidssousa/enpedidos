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
            const booksSchema = Joi.array().items(Joi.object().keys({
                id: Joi.number(),
                name: Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            }))
            request
                .get('/books')
                .end((error, res) => {
                    JoiAssert(res.body, booksSchema)
                    done(error)
                })
        })
    })
    describe('getById()', () => {
        it('deve retornar um livro', (done) => {
            const bookSchema = Joi.object().keys({
                id: Joi.number(),
                name: Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            })
            request
                .get(`/books/${fakeBook.id}`)
                .end((error, res) => {
                    JoiAssert(res.body, bookSchema)
                    done(error)
                })
        })
    })
    describe('create()', () => {
        it('deve criar um livro', (done) => {
            const bookSchema = Joi.object().keys({
                id: Joi.number(),
                name: Joi.string(),
                created_at: Joi.date().iso(),
                updated_at: Joi.date().iso()
            })
            request
                .post(`/books`)
                .send({ id: 2, name: 'book 2' })
                .expect(200)
                .end((error, res) => {
                    JoiAssert(res.body, bookSchema)
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

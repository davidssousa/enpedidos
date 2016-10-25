import BooksController from '../../../controllers/books'

describe('Controller Books', () => {
    describe('getAll()', () => {
        it('deve retornar uma lista de books', () => {
            const Books = {
                findAll: td.function()
            }
            const booksController = new BooksController(Books)
            const expectedResponse = [{ id: 1, name: 'book_1', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }]
            td.when(Books.findAll({})).thenResolve(expectedResponse)
            return booksController.getAll().then(response => expect(response.data).to.be.eql(expectedResponse))
        })
    })
    describe('getById(id)', () => {
        it('deve retornar um book', () => {
            const Books = {
                findOne: td.function()
            }
            const booksController = new BooksController(Books)
            const expectedResponse = { id: 1, name: 'book_1', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse)
            return booksController.getById({ id: 1 }).then(response => expect(response.data).to.be.eql(expectedResponse))
        })
    })
    describe('create(data)', () => {
        it('deve criar um book', () => {
            const Books = {
                create: td.function()
            }
            const requestBody = { name: 'book_1' }
            const booksController = new BooksController(Books)
            const expectedResponse = { id: 1, name: 'book_1', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Books.create(requestBody)).thenResolve(expectedResponse)
            return booksController.create(requestBody).then(response => {
                expect(response.data).to.be.eql(expectedResponse)
                expect(response.statusCode).to.be.eql(201)
            })
        })
    })
    describe('update(data, psarams)', () => {
        it('deve editar um book', () => {
            const Books = {
                update: td.function()
            }
            const requestBody = { id: 1, name: 'book_1 updated' }
            const booksController = new BooksController(Books)
            const expectedResponse = { id: 1, name: 'book_1 updated', created_at: '2016-10-25 12:50:24.103 +00:00', updated_at: '2016-10-25 12:50:24.103 +00:00' }
            td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse)
            return booksController.update(requestBody, { id: 1 }).then(response => {
                expect(response.data).to.be.eql(expectedResponse)
                expect(response.statusCode).to.be.eql(204)
            })
        })
    })
    describe('delete(data, params)', () => {
        it('deve delete um book', () => {
            const Books = {
                destroy: td.function()
            }
            const booksController = new BooksController(Books)
            td.when(Books.destroy({ where: { id: 1 } })).thenResolve({})
            return booksController.delete({ id: 1 }).then(response => {
                expect(response.statusCode).to.be.eql(204)
            })
        })
    })
})

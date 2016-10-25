import BooksController from '../controllers/books'

export default (app) => {
    const booksController = new BooksController(app.datasource.models.Books)

    app.route('/books')
        .get((req, res) => {
            booksController.getAll()
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })
        .post((req, res) => {
            booksController.create(req.body)
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })

    app.route('/books/:id')
        .get((req, res) => {
            booksController.getById(req.params)
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })
        .put((req, res) => {
            booksController.update(req.body, req.params)
                .then(response => {
                    res.sendStatus(response.statusCode)
                })
        })
        .delete((req, res) => {
            booksController.delete(req.params)
                .then(response => {
                    res.sendStatus(response.statusCode)
                })
        })
}

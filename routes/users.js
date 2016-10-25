import UsersController from '../controllers/users'

export default (app) => {
    const usersController = new UsersController(app.datasource.models.Users)

    app.route('/users')
        .get((req, res) => {
            usersController.getAll()
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })
        .post((req, res) => {
            usersController.create(req.body)
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })

    app.route('/users/:id')
        .get((req, res) => {
            usersController.getById(req.params)
                .then(response => {
                    res.json(response.data)
                    res.status(response.statusCode)
                })
        })
        .put((req, res) => {
            usersController.update(req.body, req.params)
                .then(response => {
                    res.sendStatus(response.statusCode)
                })
        })
        .delete((req, res) => {
            usersController.delete(req.params)
                .then(response => {
                    res.sendStatus(response.statusCode)
                })
        })
}

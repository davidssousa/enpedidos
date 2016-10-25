import bodyParser from 'body-parser'
import BookRoutes from '../routes/books'
import UserRoutes from '../routes/users'

export default app => {
    app.use(bodyParser.json())
    app.set('port', 3000)
    app.set('json spaces', 4)

    // Routes
    BookRoutes(app)
    UserRoutes(app)
}

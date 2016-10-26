import express from 'express'
import config from './config/config'
import datasource from './config/datasource'
import RouteConfig from './config/route'
import authorization from './auth'
import token from './routes/token'

const app = express()

app.config = config
app.datasource = datasource(app)

const auth = authorization(app)
app.use(auth.initialize())
app.auth = auth

RouteConfig(app)

export default app

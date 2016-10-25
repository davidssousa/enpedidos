import express from 'express'
import config from './config/config'
import datasource from './config/datasource'
import RouteConfig from './config/route'

const app = express()

app.config = config
app.datasource = datasource(app)

RouteConfig(app)

export default app

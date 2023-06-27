import express from 'express'
import routes from './routes'
import swaggerDocs from './utils/swagger'
import createHttpError from 'http-errors'
import { errorHandler } from './middleware/errorHanlder'
import { envConfig } from './config/env.config'
const app = express()
app.use(express.json())

const port = envConfig.PORT

// Routes
routes(app)

// swagger documentation
swaggerDocs(app, port)

// Handle error
app.use(() => {
    throw createHttpError(404, 'Route not found')
})
app.use(errorHandler)

export = app

import app from './app'
import dotenv from 'dotenv'
dotenv.config()
import logger from './utils/logger'
import connect from './utils/connect'
import { envConfig } from './config/env.config'

const port = envConfig.PORT
app.listen(port, async () => {
    logger.info(`Listening On PORT ${port}`)

    // Connect to Database
    await connect()
})

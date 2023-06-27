import mongoose, { Error } from 'mongoose'
import logger from './logger'
import { envConfig } from '../config/env.config'

const connect = async () => {
    const dbUri = envConfig.DB.URL
    const dbName = envConfig.DB.NAME

    mongoose.set('strictQuery', false)
    await mongoose
        .connect(dbUri, {
            dbName: `${dbName}`,
        })
        .then(() => {
            logger.info('Connected to DB')
        })
        .catch((error: Error) => {
            logger.error('Unable to connect database', error.message)
            process.exit(1)
        })
}

export default connect

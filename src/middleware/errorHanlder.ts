import { ErrorRequestHandler } from 'express'
import logger from '../utils/logger'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    logger.error(err.message, err.statusCode)
    if (res.headersSent) {
        return next(err)
    }

    res.status(err.statusCode || 500).json({
        message: err.message || 'Something went wrong',
    })
}

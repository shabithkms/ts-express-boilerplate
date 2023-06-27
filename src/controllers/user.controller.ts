import { NextFunction, Request, RequestHandler, Response } from 'express'
import createHttpError from 'http-errors'
import User from '../model/User'
import Joi from 'joi'

export const getUsers: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await User.find()

        res.status(200).json({ users })
    } catch (error) {
        return next(createHttpError.InternalServerError)
    }
}

export const createUser: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, email } = req.body

        const user = await User.findOne({ email })

        if (user) return next(createHttpError(406, 'user already exists'))

        const createdUser = await User.create({ name, email })

        res.status(200).json({ user: createdUser })
    } catch (error) {
        return next(createHttpError.InternalServerError)
    }
}

import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const validate =
    (schema: Joi.AnySchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const validationResult = schema.validate(req.body, {
                abortEarly: false,
            })

            if (validationResult.error) {
                return res.status(422).json({
                    details: validationResult.error.details,
                })
            }
            next()
        } catch (e: any) {
            return res.status(400).send(e.errors)
        }
    }

export default validate

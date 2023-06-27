import { createUser, getUsers } from '../controllers/user.controller'
import { Router } from 'express'
import validate from '../middleware/validateResource'
import { createUserSchema } from '../schema/user.schema'

const router = Router()

/**
 * @openapi
 * '/api/user':
 *  get:
 *     tags:
 *     - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/', getUsers)

/**
 * @openapi
 * '/api/user/create':
 *  post:
 *     tags:
 *     - Users
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post('/create', validate(createUserSchema), createUser)

export default router

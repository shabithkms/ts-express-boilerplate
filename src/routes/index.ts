import { Express, Request, Response } from 'express'
require('express-group-routes')
import userRoutes from './user.routes'
import mongoose from 'mongoose'

const routes = (app: Express) => {
    /**
     * @openapi
     * /health: 
     *  get:
     *     tags:
     *     - Health check
     *     description: Responds if the app is up and running
     *     responses:
     *       200:
     *         description: App is up and running
     */
    app.get('/health', (req: Request, res: Response) => {
        let dbState = 'Unknown'
        switch (mongoose.connection.readyState) {
            case 0:
                dbState = 'DB Disconnected'
                break
            case 1:
                dbState = 'DB Connected'
                break
            case 2:
                dbState = 'DB Connecting'
                break
            case 3:
                dbState = 'DB Disconnecting'
                break
            default:
                dbState = 'DB Disconnected'
                break
        }
        res.status(200).json({
            Database: dbState,
            Health: 'OK',
            Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
    })

    // API ROUTES
    app.use('/api/user', userRoutes)
}

export default routes

require('dotenv').config()

const envConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    APP_KEY: process.env.APP_KEY || 'random-key',
    PORT: Number(process.env.PORT) || 3000,
    FRONTEND_URL: process.env.FRONTEND_URL || '#',
    DB: {
        URL: process.env.DB_URL || '#',
        NAME: process.env.DB_NAME || '#',
    },
}

module.exports = {
    envConfig,
}

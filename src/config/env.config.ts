require('dotenv').config()

declare interface DbConfig {
    URL: string
    NAME: string
}
declare interface EnvConfig {
    NODE_ENV: string
    APP_KEY: string
    VERSION: string
    PORT: number
    FRONTEND_URL: string
    DB: DbConfig
}

const config: EnvConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    APP_KEY: process.env.APP_KEY || 'random-key',
    VERSION: process.env.VERSION || '1.0.0',
    PORT: Number(process.env.PORT) || 3000,
    FRONTEND_URL: process.env.FRONTEND_URL || '#',
    DB: {
        URL: process.env.DB_URL || '#',
        NAME: process.env.DB_NAME || '#',
    },
}

export const envConfig = config

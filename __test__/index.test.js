const supertest = require('supertest')
const app = require('../dist/app')
const { setupMongoDbForTest } = require('./helpers/db')

// setup mongodb database connection
setupMongoDbForTest()

describe('GET /health', () => {
    test('Check health route', async () => {
        const response = await supertest(app).get('/health').send()
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('Health', 'OK')
        expect(response.body).toHaveProperty('Database', 'DB Connected')
    })
})

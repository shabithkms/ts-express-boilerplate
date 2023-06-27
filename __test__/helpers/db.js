const mongoose = require('mongoose')
const { envConfig } = require('../config/env.config')

// Mongoose connection for testing purpose
function setupMongoDbForTest() {
    // Connecting to the database before each test.
    beforeAll(async () => {
        // Connecting to the database
        mongoose.set('strictQuery', false)
        await mongoose.connect(envConfig.DB.URL, {
            dbName: `${envConfig.DB.NAME}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    })

    //  Closing database connection after All test.
    afterAll(async () => {
        await mongoose.connection.close()
    })
}

module.exports = {
    setupMongoDbForTest,
}

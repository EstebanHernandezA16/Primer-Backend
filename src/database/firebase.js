const admin = require('firebase-admin');

const dbConfig = require('../config/back-with-express-sdk.json');

admin.initializeApp({
    credential: admin.credential.cert(dbConfig),
    databaseURL: 'https://back-with-express-default-rtdb.firebaseio.com'
})

module.exports = admin
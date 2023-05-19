const express = require('express');
const PORT = require('./config/serverConfig')
const routes = require('./routes/routes')
//rutas
const app = express();

app.use(express.json());

routes(app)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

console.log('Server Initialized Successfully');
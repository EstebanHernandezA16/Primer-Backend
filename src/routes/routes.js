const videogamesRoutes = require('./videogamesRoutes')
const developersRoutes = require('./developersRoutes')
const routes = (server) =>{
    //server.use('/rutaTematica', FuncionContenedoraDeRutas)
    server.use('/videogames', videogamesRoutes)
    server.use('/developers', developersRoutes)
    // server.use('/game-categories', 'c')
}


module.exports = routes
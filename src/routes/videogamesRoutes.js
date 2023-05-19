const express = require('express');
const {AddVideoGame} = require('../controllers/videogamesControllers')

const videogamesRoutes = express();


/*
example of a response
 res.status(statusCode).send({
            error:error,
            message: message ,
            body :details,
        })
*/

videogamesRoutes.post('/', (req, res)=>{
    // res.status(202).send({
    //     error: 'No error found',
    //     message: 'Query responsed Successfully With POST Method',
       

    // })
    console.log('VideoGames POST method')
    AddVideoGame(req, res);
})

videogamesRoutes.get('/',(req, res)=>{
//    res.status(202).send({
//     error: 'No error found',
//     message: 'Query responsed Successfully With GET Method',
//    })
   console.log('VideoGames GET method');
    
})

videogamesRoutes.delete('/', (req, res)=>{
    // res.status(202).send({
    //     error: 'No error found',
    //     message: 'Query responsed Successfully With DELETE Method',
    // })
    console.log('VideoGames DELETE method');
})





//All these both methods Should be in a function to determinate if the user wants to edit partial or the complete of the register
// Edit a complete Register
videogamesRoutes.put('/', (req, res)=>{
    // res.status(202).send({
    //     error: 'No error found',
    //     message: 'Query responsed Successfully With PUT Method',
       

    // })
    console.log('VideoGames PUT method')
    
})

//Partial Edit of a Register
videogamesRoutes.patch('/',(req, res)=>{
    // res.status(202).send({
    //     error: 'No error found',
    //     message: 'Query responsed Successfully With PATCH Method',
       

    // })
    console.log('VideoGames PATCH method')
})





module.exports = videogamesRoutes
const express = require('express');
const controller = require('../controllers/developersControllers')
const developersRoutes = express();

developersRoutes.post('/', (req, res)=>{
 console.log("Welcome to the developers POST Method");
    controller.addDeveloper(req,res)
    // res.status(202).send(response)

})

developersRoutes.get('/',(req, res)=>{
   console.log("Welcome to the developers GET Method");
    controller.getDeveloper(req, res);

    // res.status(202).send(response);
})

developersRoutes.delete('/', (req, res)=>{
    console.log("Welcome to the developers DELETE Method");

    // res.status(202).send(response)
})

developersRoutes.put('/',(req, res)=>{
    
    console.log("Welcome to the developers PUT Method");
    
    // res.status(202).send(response)
})

developersRoutes.patch('/',(req,res)=>{
   
    console.log("Welcome to the developers PATCH Method");

    // res.status(202).send(response)
})

module.exports = developersRoutes
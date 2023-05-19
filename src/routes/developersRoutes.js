const express = require('express');

const developersRoutes = express();

developersRoutes.post('/', (req, res)=>{
    const response = {
        message: "Welcome to the developers POST Method"
    }

    res.status(202).send(response)

})

developersRoutes.get('/',(req, res)=>{
    const response = {
        message: "Welcome to the developers GET Method"
    }


    res.status(202).send(response);
})

developersRoutes.delete('/', (req, res)=>{
    const response ={
        message: "Welcome to the developers DELETE Method"
    }

    res.status(202).send(response)
})

developersRoutes.put('/',(req, res)=>{
    const response ={
        message: "Welcome to the developers PUT Method"
    }
    
    res.status(202).send(response)
})

developersRoutes.patch('/',(req,res)=>{
    const response = {
        message: "Welcome to the developers PATCH Method"
    }

    res.status(202).send(response)
})

module.exports = developersRoutes
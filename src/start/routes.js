const express = require('express');
const UserController = require('../app/Controllers/UserController')

const routes = express.Router();

routes.get('/',(req, res)=>{
    return res.json({hello: "World"});
})

//rota de cadastro 
routes.post('/users', UserController.store);

routes.get('/users', UserController.index);

module.exports = routes;
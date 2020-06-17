const express = require('express');
const CadastrarController = require('./controllers/CadastrarController')
// const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//Gerencia Rotas
const routes = express.Router();

// routes.get('/profile', ProfileController.ListProfile)// Executa Perfil do usuário

//Rotas Públicas
routes.post('/cadastrar', CadastrarController.cadastrar);//Cadastra Novo usuario
routes.post('/sessions', SessionController.createLogin);

//Consulta Dev
routes.get('/user', SessionController.authenticate);

module.exports = routes;
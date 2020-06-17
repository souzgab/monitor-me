const express = require('express');
const EventController = require('./EventController');
const authMiddleware = require('../middlewares/auth');


const systemRoutes = express.Router();

systemRoutes.use(authMiddleware)

systemRoutes.post('/sistema/cadastrar/:UserId/novoHardware', EventController.createHardUser)//Cadastra novo Hardware de Usuário
// systemRoutes.post('/eventHistory1', EventController.createEvent)//Cadastra novo EventHardware de Usuário

systemRoutes.get('/sistema/:UserId/eventMyHardware', EventController.myHardware)//Lista todos os eventos de um design especifico
systemRoutes.get('/sistema/:UserId/eventMyHardware/:hardId/eventHistory', EventController.consultHardHistory)//Cadastra novo Hardware de Usuário
systemRoutes.get('/sistema/:UserId/eventMyHardware/:hardId/AllH', EventController.consultAllH)//Consulta Todos Hardware de Usuário
systemRoutes.get('/sistema/:UserId/eventMyHardware/:hardId/AllH/:id', EventController.consultHbyId)//Consulta Hardware de Usuário

//Att de Rota
systemRoutes.put('/sistema/:UserId/eventMyHardware/:hardId/AllH/:id', EventController.atualizaHardware)//Consulta Hardware de Usuário

//Deleção de Conteudo
// routes.delete('/sistema/events/:id', EventController.delete);

module.exports = systemRoutes;
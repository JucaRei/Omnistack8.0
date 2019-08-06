const express = require('express');
const DevController = require('./controllers/DevController')

const routes = express.Router();    // criar 1 objeto específico para rotas



routes.post('/devs', DevController.store);

// exportar para que o servidor conheça as rotas
module.exports = routes;






// GET, POST, PUT, DELETE

//rota raiz, recebeu a requisição e a resposta
// routes.get('/', (req, res) => {
//     return res.json({ message: `Olá ${req.query.name}` });
// });
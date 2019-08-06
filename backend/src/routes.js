const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DislikeController')
const routes = express.Router();    // criar 1 objeto específico para rotas


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DisLikeController.store);


// exportar para que o servidor conheça as rotas
module.exports = routes;






// GET, POST, PUT, DELETE

//rota raiz, recebeu a requisição e a resposta
// routes.get('/', (req, res) => {
//     return res.json({ message: `Olá ${req.query.name}` });
// });
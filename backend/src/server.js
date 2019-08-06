const express = require('express'); // express é uma função que quando chamada ela cria um novo servidor
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');  // importar o routes

const server = express();

mongoose.connect('mongodb+srv://omnistack:root@cluster0-8fhjt.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());    // precisa especificar que vai usar JSON no express
server.use(routes);

// qual porta ese servidor vai ouvir
server.listen(3333);
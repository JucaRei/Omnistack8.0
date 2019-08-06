const axios = require('axios');
const Dev = require('../models/Dev')

// store - é igual ao create    / requição assincrona , o wait é para esperar ele terminar de fazer a requisição para depois ele iniciar esse comando
module.exports = {
    //(index) utiliza para listagem
    async index(req, res) {
        const { user } = req.headers;   // buscar usuario logado

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            // aplicar os 3 filtros de 1 vez só , ja que é and
            $and: [
                { _id: { $ne: user } },  // ne (not equal) - traz todos os usuários, que o id não seja igual a esse que to passando
                { _id: { $nin: loggedDev.likes } },   // (nin - not in)todos os usuarios que o id não esteja dentro de 1 lista
                { _id: { $nin: loggedDev.dislikes } },
            ]
        })

        return res.json(users);
    },

    async store(req, res) {
        //console.log(req.body.username);

        const { username } = req.body;

        // verificar se usuário não esta repetido
        const userExists = await Dev.findOne({ user: username });

        // se ele existir , ele já retorna, ele não cria novamente
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
};
// do response.data, vou importar: name, bio , etc ...

// INDEX, SHOW, STORE, UPDATE, DELETE
const axios = require('axios');
const Dev = require('../models/Dev')

// store - é igual ao create    / requição assincrona , o wait é para esperar ele terminar de fazer a requisição para depois ele iniciar esse comando
module.exports = {
    async store(req, res) {
        //console.log(req.body.username);

        const { username } = req.body;

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
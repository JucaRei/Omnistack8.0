const Dev = require('../models/Dev')
// quando tem await é obrigatorio ter o async
module.exports = {
    async store(req, res) {
        // console.log(req.params.devId);
        // console.log(req.headers.user);

        const { devId } = req.params;
        const { user } = req.headers;

        //buscar o models do usuários dentro do banco de dados - a instancia deles no BD
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // se o usuario que ele esta tentando dar like não existir
        if (!targetDev) {
            return res.status(400).json({ error: 'Dev does not exists' })
        }

        // verificar se o targetdev ja não tem o id do loggedDev
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('Deu MATCH');
        }

        // caso dê certo
        loggedDev.likes.push(targetDev._id);    // adicionando esse id dentro da propriedade likes

        await loggedDev.save();

        return res.json(loggedDev);
        // return res.json({ ok: true });
    }
};

// precisa do desenvolvedor que esta dando e recebendo o like tambem

// req.params - para acessar 1 parâmetro que vem da rota
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
        timestamps: true,
    });

//timestamps created at , updated at
// user github
// likes , vai salvar o ID em quem o usuário deu like
// ref - referente ao model Dev (igual ao relacionamento num banco sql (chave estrangeira))

module.exports = model('Dev', DevSchema);
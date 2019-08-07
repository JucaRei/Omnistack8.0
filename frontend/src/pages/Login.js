import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/images/logo.svg'


export default function Login({ history }) {
    const [username, setUsername] = useState('');  // inicia com o valor vazio , vai pegar o valor do input - username acessar - setUsername precisar modificar o valor de Username

    //verificar que o onChange esta funcionando
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }


    return (    // se o html retornar mais de 1 linha coloca ()
        <div className="login-container">
            <form onSubmit={handleSubmit} >
                <img src={logo} alt="Tindev" />       {/* // chaves indica que eu quero colocar 1 código javascript, dentro do código HTML do react */}
                <input
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}  /* recebe 1 evento, o valor que digitou nesse input */
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

//export default Login;
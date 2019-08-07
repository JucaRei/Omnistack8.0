import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';  // Desestruturação, por isso as {} , BrowserRouter - Roteamento no Browser, Router é a rota

import Login from './pages/Login';
import Main from './pages/Main';

// Também vai ser 1 componente
export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />   {/* rota de login vai estar acessivel quando o usuário estiver na pagina raiz  */}
            {/* exact faz uma comparação de exatidão */}
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}
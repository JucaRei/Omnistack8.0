import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';    // criar link
import './Main.css'

import api from '../services/api';

import logo from "../assets/images/logo.svg";
import dislike from "../assets/images/dislike.svg";
import like from "../assets/images/like.svg";

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]); // toda a vez que o id for alterado chama essa função

    // componentes - fazer o like
    async function handleLike(id) {
        await api.post(`/devs/{id}/likes`, null, {
            headers: { user: match.params.id },
        })

        //filtrar os usuarios
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/{id}/dislikes`, null, {
            headers: { user: match.params.id },
        })

        //filtrar os usuarios
        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/" >
                <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img
                                src={user.avatar}
                                alt={user.name}
                            />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)} >
                                    <img src={dislike} alt="Dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="empty">Acabou :(</div>
                )}
        </div>
    );
}

//return <h1>{match.params.id}</h1>      // acessar o id desse componente na tela

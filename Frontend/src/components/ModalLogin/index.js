import React, { useState } from 'react';

import isAuthenticated from '../../services/auth';

import { AiOutlineUser } from 'react-icons/ai';
import { MdClear } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

import { Header, Title } from '../ModaisRecompenses/styles/modais';
import { SubmitButton, Form } from './styles';

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            console.log("Preencha todos os campos");
        }
        else {
            setLoading(true);
            
            setTimeout(() => {
                setLoading(false);
                if (isAuthenticated(email, password)) {
                    setIsLogged(true);
                }
            }, 1000);
        }
    }

    return (
        <>
            <Header style={{ justifyContent: "flex-end" }}>
                <MdClear onClick={props.onClose} />
            </Header>
            <Title>
                <p> Autenticação de usuário <AiOutlineUser /> </p>
            </Title>

            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuário" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <SubmitButton loading={loading} onClick={props.redirectUser(isLogged)} >
                    {loading ? <FaSpinner /> : <p> Autenticar</p>}
                </SubmitButton>
            </Form>
        </>
    );
}
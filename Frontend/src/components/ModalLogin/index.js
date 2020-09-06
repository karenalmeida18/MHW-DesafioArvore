import React, { useState } from 'react';

import isAuthenticated from '../../services/auth';

import { AiOutlineUser } from 'react-icons/ai';
import { MdClear } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

import { Header, Title } from '../ModaisRecompenses/styles/modais';
import { SubmitButton, Form, MsgBox, ContainerLogin } from './styles';

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setError(true);
            setAlert("Preencha todos os campos para continuar.");
        }
        else {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                isAuthenticated(email, password) ? setIsLogged(true) : setAlert("Usuário não encontrado.")
            }, 1000);
        }
    }

    return (
        <ContainerLogin>
            <Header style={{ justifyContent: "flex-end" }}>
                <MdClear onClick={props.onClose} />
            </Header>
            <Title>
                <p> Autenticação de usuário <AiOutlineUser /> </p>
            </Title>

            <Form onSubmit={handleSubmit} error={error}>
                <input type="text" placeholder="Usuário" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <MsgBox alert={alert}>
                    {alert}
                </MsgBox>
                <SubmitButton loading={loading} onClick={props.redirectUser(isLogged)} >
                    {loading ? <FaSpinner /> : <p> Autenticar</p>}
                </SubmitButton>
            </Form>
        </ContainerLogin>
    );
}
import React, { useState } from 'react';

import api from '../../services/api';

import { AiOutlineEdit } from 'react-icons/ai';
import { MdClear } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

import { Modal, Container, Header, TextArea, Title, CostumizeBox } from './styles/modais';
import { SubmitButton, MsgBox } from '../ModalLogin/styles';

export default function CustomizeRecompense(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState("");

    async function handleSubmit() {
        if (!data) {
            setError(true);
            setAlert("Preencha todos os campos para continuar.");
        }
        else {
            setLoading(true);
            try {
                api.post('/register', { description: data });
                setError(false);
                setAlert("Recompensa cadastrada!");

                localStorage.clear();
                window.location.reload();
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    }

    return (
        <>
            <Modal >
                <Container>
                    <Header style={{ justifyContent: "flex-end" }}>
                        <MdClear onClick={props.onClose} />
                    </Header>
                    <Title>
                        <p>Personalize a recompensa <AiOutlineEdit /> </p>
                    </Title>

                    <CostumizeBox>
                        <TextArea
                            error={error}
                            type="text"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            placeholder="Escreva aqui a recompensa para seu filho." />
                        <MsgBox alert={alert}>
                            {alert}
                        </MsgBox>
                        <SubmitButton loading={loading} onClick={handleSubmit}>
                            {loading ? <FaSpinner /> : <p> Salvar</p>}
                        </SubmitButton>
                    </CostumizeBox>

                </Container>

            </Modal>
        </>
    );
}
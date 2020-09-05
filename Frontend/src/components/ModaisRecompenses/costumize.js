import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { AiOutlineEdit } from 'react-icons/ai';
import { MdClear } from "react-icons/md";

import { Modal, Container, Header, TextArea, Title, CostumizeBox } from './styles/modais';
import { SubmitButton } from '../ModalLogin/styles';

export default function CustomizeRecompense(props) {
    const [data, setData] = useState("");
    const History = useHistory();

    async function handleSubmit() {
        if (!data) {
            console.log("Preencha a descrição antes de enviar!");
        }
        else {
            try {
                const response = api.post('/register', { description: data });
                console.log(response);
                localStorage.clear();
                History.push('/');
            }
            catch (error) {
                console.log(error);
            }
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
                            type="text"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            placeholder="escreva aqui" />
                        <SubmitButton onClick={handleSubmit}>
                            <p> Salvar</p>
                        </SubmitButton>
                    </CostumizeBox>

                </Container>

            </Modal>
        </>
    );
}
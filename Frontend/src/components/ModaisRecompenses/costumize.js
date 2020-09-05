import React, { useState } from 'react';

import api from '../../services/api';

import { AiOutlineEdit } from 'react-icons/ai';
import { MdClear } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

import { Modal, Container, Header, TextArea, Title, CostumizeBox } from './styles/modais';
import { SubmitButton } from '../ModalLogin/styles';

export default function CustomizeRecompense(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");

    async function handleSubmit() {
        if (!data) {
            console.log("Preencha a descrição antes de enviar!");
        }
        else {
            setLoading(true);
            try {
                const response = api.post('/register', { description: data });
                console.log(response);
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
                            type="text"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            placeholder="escreva aqui" />
                        <SubmitButton loading={loading}  onClick={handleSubmit}>
                            {loading ? <FaSpinner /> : <p> Salvar</p>}
                        </SubmitButton>
                    </CostumizeBox>

                </Container>

            </Modal>
        </>
    );
}
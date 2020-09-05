import React from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai';
import { MdClear } from "react-icons/md";

import { Modal, Container, Header, TextArea, Title, CostumizeBox } from './styles/modais';
import { SubmitButton } from '../ModalLogin/styles';

export default function CustomizeRecompense(props) {
    const History = useHistory();

    function handleSubmit(){
        localStorage.clear();
        History.push('/');
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
                        <TextArea placeholder="escreva aqui" />
                        <SubmitButton onClick={handleSubmit}>
                            <p> Salvar</p>
                        </SubmitButton>
                    </CostumizeBox>

                </Container>

            </Modal>
        </>
    );
}
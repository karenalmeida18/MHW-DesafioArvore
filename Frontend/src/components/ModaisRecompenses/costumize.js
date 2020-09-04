import React from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { MdClear } from "react-icons/md";

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, TextArea, Title } from './styles/modais';

export default function CustomizeRecompense(props) {

    return (
        <>
            <Modal >
                <Container>
                    <Header style={{justifyContent: "flex-end"}}>
                        <MdClear onClick={props.onClose}  />
                    </Header>
                    <Title>
                        <p>Personalize a recompensa <AiOutlineEdit /> </p>
                    </Title>

                    <RecompensesBox>
                        <TextArea placeholder="escreva aqui" />
                    </RecompensesBox>
                </Container>

            </Modal>
        </>
    );
}
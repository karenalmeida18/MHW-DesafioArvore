import React from 'react';

import {  MdClear, MdKeyboardArrowRight } from "react-icons/md";
import { BsBookHalf } from 'react-icons/bs';

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, Recompense } from './styles/modais';

export default function BooksRecompenses (props) {

    return (
        <>
            <Modal >
                <Container>
                    <Header>
                        < BsBookHalf className='iconHeader'/>
                        <MdClear onClick={props.onClose} />
                    </Header>
                    <h3> Por livro </h3>

                    <RecompensesBox>
                        <Recompense>
                            <p style={{marginLeft: '20px'}}> O menino e o peixinho </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{marginLeft: '20px'}}> João e o Pé de Feijão  </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{marginLeft: '20px'}}> O patinho feio </p><MdKeyboardArrowRight />
                        </Recompense>
                    </RecompensesBox>
                </Container>

            </Modal>
        </>
    );
}
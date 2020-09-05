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
                    <h3> Por tempo </h3>

                    <RecompensesBox>
                        <Recompense>
                            <p style={{marginLeft: '20px'}}> 15 minutos </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{marginLeft: '20px'}}> 10 minutos  </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{marginLeft: '20px'}}> 1 hora </p><MdKeyboardArrowRight />
                        </Recompense>
                    </RecompensesBox>
                </Container>

            </Modal>
        </>
    );
}
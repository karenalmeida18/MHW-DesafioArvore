import React from 'react';

import { AiOutlineSortAscending } from 'react-icons/ai';
import { MdClear, MdKeyboardArrowRight } from "react-icons/md";

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, Recompense } from './styles/modais';

export default function CategoryRecompenses(props) {

    return (
        <>
            <Modal >
                <Container>
                    <Header>
                        <AiOutlineSortAscending className='iconHeader' />
                        <MdClear onClick={props.onClose} />
                    </Header>
                    <h3> Por categoria </h3>

                    <RecompensesBox>
                        <Recompense>
                            <p style={{ marginLeft: '20px' }}> Artes </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{ marginLeft: '20px' }}> Ciencias Humanas e Sociais </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense>
                            <p style={{ marginLeft: '20px' }}> Fantasia </p><MdKeyboardArrowRight />
                        </Recompense>
                    </RecompensesBox>
                </Container>

            </Modal>
        </>
    );
}
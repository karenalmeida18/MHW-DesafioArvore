import React, { useState } from 'react';

import { AiOutlineSortAscending } from 'react-icons/ai';
import { MdClear, MdKeyboardArrowRight } from "react-icons/md";

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, Recompense } from './styles/modais';
import CostumizeRecompense from './costumize';

export default function CategoryRecompenses(props) {
    const [visible, setVisible] = useState(false);

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
                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> Artes </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> Ciencias Humanas e Sociais </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> Fantasia </p><MdKeyboardArrowRight />
                        </Recompense>
                    </RecompensesBox>
                </Container>
                {visible && <CostumizeRecompense onClose={() => setVisible(false)} />}

            </Modal>
        </>
    );
}
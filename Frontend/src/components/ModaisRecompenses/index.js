import React, { useState } from 'react';

import { AiOutlineFieldTime, AiOutlineSortAscending } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { MdCake, MdClear, MdKeyboardArrowRight } from "react-icons/md";

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, Recompense } from './styles/modais';
import Login from '../ModalLogin';

export default function NewRecompense(props) {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <>
            <Modal >
                {isLogged ?
                    <Container >

                        <Header >
                            <MdCake className='iconHeader' />
                            <MdClear onClick={props.onClose} />
                        </Header>
                        <h3>Nova Recompensa</h3>

                        <RecompensesBox>
                            <Recompense onClick={props.openTime}>
                                <p><AiOutlineFieldTime color='#45D0C1' />
                                     Por tempo</p> <MdKeyboardArrowRight />
                            </Recompense>

                            <Recompense onClick={props.openCategory}>
                                <p> <AiOutlineSortAscending color='#45D0C1' />
                                    Por categoria </p> <MdKeyboardArrowRight />
                            </Recompense>

                            <Recompense onClick={props.openBook}>
                                <p> <BsBookHalf color='#45D0C1' />
                                    Por livro </p><MdKeyboardArrowRight />
                            </Recompense>
                        </RecompensesBox>
                    </Container>

                    : <Login onClose={props.onClose} redirectUser={(bool) => setIsLogged(bool)} />
                }

            </Modal>
        </>
    );
}
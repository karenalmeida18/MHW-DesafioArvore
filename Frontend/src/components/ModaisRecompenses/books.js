import React,{ useState } from 'react';

import { MdClear, MdKeyboardArrowRight } from "react-icons/md";
import { BsBookHalf } from 'react-icons/bs';

import { RecompensesBox } from '../ListRecompenses/styles';
import { Modal, Container, Header, Recompense } from './styles/modais';
import CostumizeRecompense from './costumize';

export default function BooksRecompenses(props) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Modal >
                <Container>
                    <Header>
                        < BsBookHalf className='iconHeader' />
                        <MdClear onClick={props.onClose} />
                    </Header>
                    <h3> Por livro </h3>

                    <RecompensesBox>
                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> O menino e o peixinho </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> João e o Pé de Feijão  </p> <MdKeyboardArrowRight />
                        </Recompense>

                        <Recompense onClick={() => setVisible(true)}>
                            <p style={{ marginLeft: '20px' }}> O patinho feio </p><MdKeyboardArrowRight />
                        </Recompense>
                    </RecompensesBox>
                </Container>
                {visible && <CostumizeRecompense onClose={() => setVisible(false)} />}
            </Modal>
        </>
    );
}
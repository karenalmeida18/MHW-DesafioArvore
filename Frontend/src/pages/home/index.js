import React from 'react';
import { useHistory } from 'react-router-dom';

import { IoMdFlower, IoIosArrowForward } from 'react-icons/io';
import { FaTree, FaMountain } from 'react-icons/fa';
import { GiFruitTree } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';

import { Container, Ambients, Titulo, Floresta, Jardim, Pomar, Terrario, Recompensas, Bookcase} from './styles';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default function Home() {
    const History = useHistory();

    return (
        <>
            <Topbar />
            <Container>
                <Titulo>
                    <RiPlantFill />
                    <h1>Minhas Plantas</h1>
                </Titulo>
                <Ambients>
                    <Floresta>
                        <FaTree />
                        <p>Floresta</p>
                    </Floresta>
                    <Jardim>
                        <IoMdFlower />
                        <p>Jardim</p>
                    </Jardim>
                    <Pomar>
                        <GiFruitTree />
                        <p>Pomar</p>
                    </Pomar>
                    <Terrario>
                        <FaMountain />
                        <p>Terrário</p>
                    </Terrario>
                </Ambients>

                <Recompensas onClick={() => History.push('/recompenses')} >
                    <p>
                        Recompensas personalizadas
                        <IoIosArrowForward />
                    </p>
                </Recompensas>

                <Bookcase onClick={() => History.push('/bookcase')} >
                    <p>
                        Minha estante
                        <IoIosArrowForward />
                    </p>
                </Bookcase>

            </Container>
            <Navbar />
        </>
    );
}


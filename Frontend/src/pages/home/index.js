import React from 'react';
import {IoMdFlower, IoIosArrowForward} from 'react-icons/io'
import {FaTree, FaMountain} from 'react-icons/fa'
import {GiFruitTree, GiCottonFlower} from 'react-icons/gi'
import {RiPlantFill} from 'react-icons/ri'
import {Container, Ambients, Titulo, Floresta, Jardim, Pomar, Terrario, Recompensas} from './styles'
import {useHistory} from 'react-router-dom'

export default function Home() {
    const History = useHistory();

    return (
        <Container>
            <Ambients>
                
                <Titulo>
                    <RiPlantFill/>
                    <h1>Minhas Plantas</h1>
                </Titulo>

                <Floresta>
                    <FaTree/>
                    <p>Floresta</p> 
                </Floresta>
                <Jardim>
                    <IoMdFlower/>
                    <p>Jardim</p>
                </Jardim>
                <Pomar>
                    <GiFruitTree/>
                    <p>Pomar</p>
                </Pomar>
                <Terrario>
                    <FaMountain/>
                    <p>Terrário</p>
                </Terrario>
            </Ambients>

            <Recompensas onClick={() => History.push('/recompenses')} >
                <p>
                    Recompensas personalizadas
                    <IoIosArrowForward/>
                </p>
            </Recompensas>
            
        </Container>
    );
}


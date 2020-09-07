import React, {useState} from 'react';

import { Header, Nivel, InfoNivel, MissionBox, Livro } from './styles';
import { Container } from '../BoxMessages/styles';

import { BiArrowBack, BiArrowToRight } from 'react-icons/bi';
import { FcReading, FcSalesPerformance, FcLikePlaceholder } from 'react-icons/fc';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { AiOutlinePercentage } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';

import Livro1 from '../../assets/livro8.png';
import Livro2 from '../../assets/livro10.png';
import Livro3 from '../../assets/livro11.png';

export default function HeaderProfile() {
    const [ visible, setVisible ] = useState(false);
    return (
        <>
            <Header>
                <BiArrowBack style={{ color: "black", fontSize: "30px" }} />
                
                <Nivel onClick={() => setVisible(true)}>  <h4> 1 </h4></Nivel>
                <FcReading />
                <FcLikePlaceholder />
                <FcSalesPerformance />

                {visible && 
                <Container>
                    <InfoNivel>
                        <MdClear className="close" onClick={() => setVisible(false)}/>
                        <p><GiLaurelsTrophy /> <strong> Level : </strong>  1 </p>
                        <p><AiOutlinePercentage /> <strong> Resta para o próximo level :</strong>  20%</p>

                        <MissionBox>
                            <p> Missões para passar de level! </p>
                            <div className="container-books">
                                <div>
                                    <p>+10 pontos</p>
                                    <Livro src={Livro1}></Livro>
                                    <p>Leia agora <BiArrowToRight /></p>
                                </div>
                                <div>
                                    <p>+10 pontos</p>
                                    <Livro src={Livro2}></Livro>
                                    <p>Leia agora <BiArrowToRight /></p>
                                </div>
                                <div>
                                    <p>+10 pontos</p>
                                    <Livro src={Livro3}></Livro>
                                    <p>Leia agora <BiArrowToRight /></p>
                                </div>                            </div>

                        </MissionBox>
                    </InfoNivel>
                </Container>
                }
            </Header>
        </>
    );
}
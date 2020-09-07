import React from 'react';

import {  InfoModal, Title, Conquista } from './styles';
import { Container } from '../BoxMessages/styles';

import { GiLaurelsTrophy } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';

export default function ModalBooks(props) {
    return (
        <>
                <Container>

                    <InfoModal>
                        <Title>
                            Progresso e conquistas
                        <MdClear className="close" onClick={props.onClose}/>
                        </Title>
                         <Conquista style={{marginTop: "20px"}}>
                             <GiLaurelsTrophy/>
                             <div>
                             <h5>Leitor imersivo </h5>
                             <p>Manteve-se concentrado em suas leituras.</p>
                             </div>
                         </Conquista>
                         <Conquista>
                             <GiLaurelsTrophy/>
                             <div>
                             <h5>Leitor frenético </h5>
                             <p> Leu 3 livros no mês.</p>
                             </div>
                         </Conquista>
                         <Conquista>
                             <GiLaurelsTrophy/>
                             <div>
                             <h5>Leitor cuidadoso</h5>
                             <p>Cuidou de Otto cumprindo as missões .</p>
                             </div>
                         </Conquista>
                    </InfoModal>
                    
                </Container>
           
        </>
    );
}
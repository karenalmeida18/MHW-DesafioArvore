import React from 'react';

import {  InfoModal, Title, ProgressBarBox, ProgressBar } from './styles';
import { Container } from '../BoxMessages/styles';

import { GiChocolateBar, GiSoapExperiment } from 'react-icons/gi';
import { RiRestTimeLine } from 'react-icons/ri';
import { MdClear } from 'react-icons/md';
import { BiHappyHeartEyes } from 'react-icons/bi';

export default function ModalMood(props) {
    return (
        <>
                <Container>
                    <InfoModal >
                       
                        <Title> Humor
                        <MdClear className="close" onClick={props.onClose}/>
                        </Title>


                        <p> Otto está com fome. Alimente ele!</p>

                        <p><GiChocolateBar color="brown" /> <strong> Fome : </strong>  80%  </p>
                        <p><RiRestTimeLine color="gray" /> <strong> Energia  :</strong>  20%</p>
                        <p><GiSoapExperiment color="blue"/> <strong> Higiene  :</strong>  20%</p>

                        <p><BiHappyHeartEyes color="#FFA17C"/><strong>Felicidade</strong> : 100% </p>
                        <ProgressBarBox>
                           <ProgressBar/>
                        </ProgressBarBox>

                        <p style={{color: "#FFA17C",fontSize: "10pt"}}> 
                        Continue lendo para manter a felicidade 100%! </p>

                    </InfoModal>
                </Container>
           
        </>
    );
}
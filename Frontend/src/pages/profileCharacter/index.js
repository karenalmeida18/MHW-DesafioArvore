import React, { useState, useEffect } from 'react';

import {
    Container, Avatar, Footer, ContentModal, AvatarAnimate,
     ShowerButton, EatButton, SleepButton, Food } from './styles';

import monkey from '../../assets/macaco-corpo-feliz.png';
import monkeySleep from '../../assets/macaco-dormindo.png';
import monkeyEating from '../../assets/macaco-corpo-falando.gif';

import { GiBedLamp } from 'react-icons/gi';
import { FaShower, FaAppleAlt } from 'react-icons/fa'
import { RiFridgeFill } from 'react-icons/ri';

import BoxMessage from '../../components/BoxMessages';
import Shower from '../../components/Shower';
import HeaderProfile from '../../components/HeaderProfile';

export default function ProfileCharacter() {
    const [sleep, setSleep] = useState(false);
    const [inShower, setInShower] = useState(false);
    const [isEating, setIsEating] = useState(false);
    const [readingDone, setReadingDone] = useState(false);

    //alterna entre leitura feita e não feita (simulação)
    useEffect(() => {
        const timer = setInterval(() => {
            setReadingDone(!readingDone);
        }, 3000);
        return () => clearInterval(timer);
    });



    return (
        <>
            <Container>
                <HeaderProfile/>
                {sleep && (
                    <>
                        {readingDone ?
                            <ContentModal sleep={sleep} />
                            :
                            <BoxMessage content="Otto está com sono. Mas para fazer-lo dormir,
                            precisamos ler 10 páginas para ele. Vamos lá? " />
                        }
                    </>
                )}
                {!isEating && (
                    <>
                        {sleep && readingDone ? <Avatar src={monkeySleep} /> : <Avatar src={monkey} />}

                    </>
                )}
             
                <AvatarAnimate isEating={isEating} src={monkeyEating} />
                
                <Shower inShower={inShower} />
                
                {isEating &&
                <Food>
                    <FaAppleAlt />
                </Food>
                }
                <Footer >
                    
                    <SleepButton
                        sleep={readingDone && sleep} inShower={inShower} isEating={isEating}
                        onClick={() => setSleep(!sleep)}
                    >
                        <GiBedLamp />
                    </SleepButton>

                    <ShowerButton
                        sleep={readingDone && sleep} inShower={inShower} isEating={isEating}
                        onClick={() => setInShower(!inShower)}
                    >
                        <FaShower />
                    </ShowerButton>

                    <EatButton
                        sleep={readingDone && sleep} inShower={inShower} isEating={isEating}
                        onClick={() => setIsEating(!isEating)} >
                        <RiFridgeFill />
                    </EatButton>
                </Footer>
            </Container>
        </>
    );
}
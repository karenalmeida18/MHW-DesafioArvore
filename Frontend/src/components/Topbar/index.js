import React from 'react';
import { Link } from 'react-router-dom';

import { TopbarContainer, IconsContainer, IconStar, IconCoin } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { HiStar } from 'react-icons/hi';

export default function Navbar() {
    return (
        <TopbarContainer>
            <Link to='/'>
                <BiArrowBack />
            </Link>
            
            <IconsContainer>
                <IconStar>
                    <div>
                        <HiStar />
                    </div>
                    0 pontos
                </IconStar>
                <IconCoin>
                    <p> 
                         A
                    </p>
                    11 moedas
                </IconCoin>
            </IconsContainer>
        </TopbarContainer>
    );
}
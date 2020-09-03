import React from 'react';
import { Link } from 'react-router-dom';

import { FiHome, FiMenu } from 'react-icons/fi';
import { RiStackFill } from 'react-icons/ri';
import { FaMedal } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi'

import { NavbarContainer } from './styles';

export default function Navbar() {
    return (
        <NavbarContainer>
            <ul>
                <li>
                    <Link to='/'>
                        <FiHome />
                         Inicio
                    </Link>
                </li>
                <li>
                    <RiStackFill />
                     Categorias
                </li>
                <li>
                    <FaMedal />
                     Conquistas
                </li>
                <li>
                    <HiDownload />
                     Offline
                </li>
                <li>
                    <FiMenu />
                     Mais
                </li>
            </ul>
        </NavbarContainer>
    );
}


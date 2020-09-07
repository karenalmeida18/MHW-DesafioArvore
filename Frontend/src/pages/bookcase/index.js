import React from 'react';

import { BsBookHalf } from "react-icons/bs";
import { Content, Titulo, Estante, Prateleira, Livro, Avatar, BordaGrama, FundoMacaco } from './styles';

import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

import Macaco from '../../assets/macaco-estante.png';
import Grama from '../../assets/grass_desktop.svg';
import Livro1 from '../../assets/livro1.png';
import Livro2 from '../../assets/livro2.png';
import Livro3 from '../../assets/livro3.png';
import Livro4 from '../../assets/livro4.png';
import Livro5 from '../../assets/livro5.png';
import Livro6 from '../../assets/livro6.png';
import Livro7 from '../../assets/livro7.png';
import Livro8 from '../../assets/livro8.png';
import Livro9 from '../../assets/livro9.png';
import Livro10 from '../../assets/livro10.png';
import Livro11 from '../../assets/livro11.png';

export default function Bookcase() {
    return (
        <>
            <Topbar />

            <Titulo>
                <BsBookHalf />
                <h1>Minha estante</h1>
            </Titulo>

            <Content>
                <Estante>
                    <Prateleira>
                        <Livro src={Livro1}></Livro>
                        <Livro src={Livro2}></Livro>
                        <Livro src={Livro3}></Livro>
                        <Livro src={Livro4}></Livro>
                    </Prateleira>

                    <Prateleira>
                        <Livro src={Livro5}></Livro>
                        <Livro src={Livro6}></Livro>
                        <Livro src={Livro7}></Livro>
                        <Livro src={Livro8}></Livro>
                    </Prateleira>

                    <Prateleira>
                        <Livro src={Livro9}></Livro>
                        <Livro src={Livro10}></Livro>
                        <Livro src={Livro11}></Livro>
                    </Prateleira>  
                </Estante>
            </Content>

            <FundoMacaco>
                <BordaGrama src={Grama}/>
                <Avatar src={Macaco}/>
            </FundoMacaco>

            <Navbar />
        </>
    );
}
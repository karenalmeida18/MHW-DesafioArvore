import React from 'react';


import { MdCake, MdAddCircle } from "react-icons/md";
import { RiArrowLeftLine } from "react-icons/ri";

import { RecompensesContainer, NewRecompensa, Voltar, Recompense, RecompensesBox } from './styles';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default function Recompenses() {

    return (
        <>
            <Topbar />
            <RecompensesContainer>

                <h2>Recompensas</h2>

                <NewRecompensa>
                    <MdAddCircle />
                 Nova recompensa
            </NewRecompensa>

                <RecompensesBox>
                    <Recompense>
                        <MdCake />
                    Ver desenho depois do almoço
                </Recompense>

                    <Recompense>
                        <MdCake />
                    Caneta nova
                </Recompense>

                    <Recompense>
                        <MdCake />
                    Escolher o jantar de hoje
                </Recompense>

                    <Recompense>
                        <MdCake />
                    Dormir mais tarde
                </Recompense>
                </RecompensesBox>

            </RecompensesContainer>
            <Navbar />
        </>
    );
}

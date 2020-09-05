import React from 'react';

import { MdCake, MdAddCircle } from "react-icons/md";

import { RecompensesContainer, NewRecompensa, Recompense, RecompensesBox } from './styles';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default function ListRecompenses(props) {

    return (
        <>
            <Topbar />
            <RecompensesContainer>

                <h3>Recompensas</h3>

                <NewRecompensa onClick={props.openNewRecompense}>
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

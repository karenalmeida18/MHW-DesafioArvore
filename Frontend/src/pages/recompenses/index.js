import React from 'react';
import { MdCake, MdAddCircle } from "react-icons/md";
import { RiArrowLeftLine } from "react-icons/ri";
import {RecompensesContainer, NewRecompensa, Voltar, Recompense, RecompensesBox} from './styles'


export default function Recompenses() {
 
    return (
        <RecompensesContainer>

            <h1>Recompensas</h1> 

            <NewRecompensa>
                <MdAddCircle/> 
                 Nova recompensa
            </NewRecompensa>

            <RecompensesBox>
                <Recompense>
                    <MdCake/>      
                    Ver desenho depois do almoço
                </Recompense>

                <Recompense>
                    <MdCake/>      
                    Caneta nova
                </Recompense>

                <Recompense>
                    <MdCake/>      
                    Escolher o jantar de hoje
                </Recompense>

                <Recompense>
                    <MdCake/>      
                    Dormir mais tarde
                </Recompense>
            </RecompensesBox>

        </RecompensesContainer>

    );
}

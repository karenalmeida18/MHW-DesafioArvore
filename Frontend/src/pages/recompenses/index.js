import React from 'react';
import { MdCake } from "react-icons/md";
import { RiArrowLeftLine } from "react-icons/ri";
import {RecompensesContainer, NewRecompensa} from './styles'


export default function Recompenses() {
 
    return (
        <RecompensesContainer>
            
        <div class="voltar">
            <RiArrowLeftLine/>
        </div>
            

     <p>
             <h1>Recompensas</h1>             
            

        <NewRecompensa>
            <MdCake/>      
             Nova recompensa
            <div class="linha"> </div>
        </NewRecompensa>

        <p class="recompensa1">
            <MdCake/>      
             Ver desenho depois do almoço
            
        </p>

        <p class="recompensa2">
            <MdCake/>      
             Caneta nova
        </p>

     </p>

        </RecompensesContainer>

    );
}

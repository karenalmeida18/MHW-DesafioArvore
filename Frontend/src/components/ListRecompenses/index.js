import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { MdCake, MdAddCircle } from "react-icons/md";
import { RecompensesContainer, NewRecompensa, Recompense, RecompensesBox } from './styles';

import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

export default function ListRecompenses(props) {
    const [recompensesData, setRecompensesData] = useState([]);

    useEffect(() => {
        async function loadRecompenses() {
            try {
                const response = await api.get('/recompenses');
                console.log(response);
                setRecompensesData(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        loadRecompenses();
    }, []);

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

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
                        {recompensesData.length > 0 ? (
                            <>
                              {recompensesData.map((recompense) => (
                                  <>
                                <MdCake />
                                <span>{recompense.description}</span>
                                </>
                            ))}
                            </>
                        ) : <span> Nenhuma recompensa disponivel </span> }
                      
                    </Recompense>

                </RecompensesBox>

            </RecompensesContainer>
            <Navbar />
        </>
    );
}

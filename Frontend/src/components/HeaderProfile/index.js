import React, { useState } from 'react';

import { Header, Nivel, } from './styles';

import { BiArrowBack } from 'react-icons/bi';
import { FcReading, FcSalesPerformance, FcLikePlaceholder } from 'react-icons/fc';

import ModalNivel from './modalNivel';
import ModalMood from './modalMood';
import ModalBooks from './modalBooks';

export default function HeaderProfile() {
    const [visibleNivel, setVisibleNivel] = useState(false);
    const [visibleMood, setVisibleMood] = useState(false);
    const [visibleBooks, setVisibleBooks] = useState(false);

    return (
        <>
            <Header>

                <BiArrowBack style={{ color: "black", fontSize: "30px" }} />

                <Nivel onClick={() => setVisibleNivel(true)}>  <h4> 1 </h4></Nivel>
                <FcReading onClick={() => setVisibleBooks(true)} />
                <FcLikePlaceholder onClick={() => setVisibleMood(true)}/>
                <FcSalesPerformance />

            </Header>

            {visibleNivel && <ModalNivel onClose={() => setVisibleNivel(false)} />}
            {visibleMood && <ModalMood onClose={() => setVisibleMood(false)} />}
            {visibleBooks && <ModalBooks onClose={() => setVisibleBooks(false)} />}

        </>
    );
}
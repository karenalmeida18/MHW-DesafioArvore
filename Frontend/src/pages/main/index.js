import React from 'react';

import Home from '../../pages/home';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar'

export default function Main() {
    return (
        <>
            <Topbar />
            <Home />
            <Navbar />
        </>
    );
}


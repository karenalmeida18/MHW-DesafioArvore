import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Recompenses from './pages/recompenses';
import Bookcase from './pages/bookcase';
import Character from './pages/profileCharacter';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/recompenses" component={Recompenses}/>
                <Route path="/bookcase" component={Bookcase}/>
                <Route path="/character" component={Character}/>
            </Switch>
        </BrowserRouter>

    );
}
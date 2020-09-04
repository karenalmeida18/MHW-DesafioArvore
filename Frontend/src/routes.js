import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Recompenses from './pages/recompenses';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/recompenses" component={Recompenses}/>
            </Switch>
        </BrowserRouter>

    );
}
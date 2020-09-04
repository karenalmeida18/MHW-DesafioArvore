import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Recompenses from './pages/recompenses';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/recompenses" component={Recompenses}/>
            </Switch>
        </BrowserRouter>

    );
}
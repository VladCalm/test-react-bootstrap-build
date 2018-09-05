import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import App  from './App.js';

const AppWithHot = hot(module)(App);

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={AppWithHot}></Route>
    </BrowserRouter>,

    document.getElementById('root')
);


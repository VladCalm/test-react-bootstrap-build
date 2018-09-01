import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { App } from './App.js';

const AppWithHot = hot(module)(App);

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={AppWithHot}></Route>
    </BrowserRouter>,

    document.getElementById('root')
);


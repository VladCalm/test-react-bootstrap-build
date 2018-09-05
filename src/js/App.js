import React, { Component } from 'react';

import { Header } from "./components/Header"
import Main from "./components/Main";
import '../styles/App.css';
import '../styles/custom.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )

    }

}
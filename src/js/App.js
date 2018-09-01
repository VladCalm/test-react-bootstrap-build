import React from 'react';
import { Header } from "./components/Header"
import { Main } from "./components/Main";
import '../styles/App.css';
import '../styles/custom.css';
export class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )

    }

}
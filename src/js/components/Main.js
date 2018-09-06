import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NewTasks from './NewTasks';
import { TasksNav } from './TasksNav';
import '../../styles/Main.css';
import { AddBtn } from './AddBtn';

export default class Main extends Component {
    render() {
        return (
            <main className='main-container'>
                <Route path='/tasks/' component={TasksNav}/>
                <Route exact path='/tasks/new' component={NewTasks} />
                <Route path='/tasks/' component={AddBtn} />
            </main>
        );
    }
}



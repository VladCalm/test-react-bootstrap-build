import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { NewTasks} from "./NewTasks";
import {TasksNav} from "./TasksNav";
import { TableHeader} from "./TaskTable";
import '../../styles/Main.css';


export const Main = () => (
    <main className='main-container'>
        <Route path='/tasks/' component={TasksNav} />
        <Route exact path='/tasks/new' component={NewTasks} />
    </main>
)
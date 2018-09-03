import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { NewTasks} from "./NewTasks";
import {TasksNav} from "./TasksNav";
import { TableHeader} from "./TaskTable";
import '../../styles/Main.css';
import {AddBtn} from "./AddBtn";


export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleActive = this.toggleActive.bind(this);

    }

    toggleActive(e) {

    }

    render() {
        return (
            <main className='main-container'>
                <Route path='/tasks/' component={TasksNav}/>
                <Route exact path='/tasks/new' component={NewTasks} />
                <Route path='/tasks/' component={AddBtn} />
            </main>
        )
    }

}



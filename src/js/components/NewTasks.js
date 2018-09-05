import React, { Component } from 'react';

import SearchBar from './SearchBar';
import { TableHead } from './TableHead';
import { tasks } from "../tasks";
import { Task } from "./Task";

export class NewTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: tasks };

    }

    renderTask(task) {
        return <Task task={task} />
    }

    handleSearch(query) {

    }

    render() {
        return (
            <div>
                <SearchBar onInputChange={this.handleSearch}/>
                <table className="table">
                    <thead>
                    <TableHead />
                    </thead>
                    <tbody className="table-body">
                    {this.state.tasks.map(this.renderTask)}
                    </tbody>
                </table>
            </div>

        );
    }
}




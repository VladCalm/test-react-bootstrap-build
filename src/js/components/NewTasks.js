import React, { Component } from 'react';

import SearchBar from './SearchBar';
import { TableHead } from './TableHead';
import { tasks } from '../tasks';
import { Task } from './Task';

export class NewTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: tasks };
        this.handleSearch = this.handleSearch.bind(this);

    }

    renderTask(task) {
        return <Task task={task} key={task.id}/>
    }

    handleSearch(query) {
        const newTasks = this.state.tasks.filter(el => {
            const searchValue = el.subject.toLowerCase();
            return searchValue.indexOf(query) !== -1;
        });

        this.setState({ tasks: newTasks }, console.log(this.state.tasks));

    }

    render() {
        return (
            <div>
                <SearchBar onInputChange={this.handleSearch} />
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




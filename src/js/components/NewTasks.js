import React, { Component } from 'react';

import SearchBar from './SearchBar';
import { TableHead } from './TableHead';
import { tasks } from '../tasks';
import { Task } from './Task';

export default class NewTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: tasks };

        this.handleSearch = this.handleSearch.bind(this);
        this.renderTask = this.renderTask.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    renderTask(task) {
        return <Task task={task} key={task.id}/>
    }

    handleSearch(query) {
        const newTasks = this.state.tasks.filter(el => {
            const searchValue = el.subject.toLowerCase();
            return searchValue.indexOf(query) !== -1;
        });

        query ? this.setState({ tasks: newTasks }) : this.setState({ tasks: tasks });
    }


    handleFilter (name, checked) {
        if (name === 'personal' && checked === true) {
            const filteredTasks = this.state.tasks.filter( el => el.personal === true );
            return this.setState({ tasks: filteredTasks });
        } if (name === 'night' && checked === true) {
            const filteredTasks = this.state.tasks.filter( el => el.night === true );
            return this.setState({ tasks: filteredTasks });
        } if (name === 'urgent' && checked === true) {
            const filteredTasks = this.state.tasks.filter( el => el.urgent === true );
            return this.setState({ tasks: filteredTasks });
        } else {
            return this.setState({ tasks: tasks });
        }
    }

    render() {
        return (
            <div>
                <SearchBar onInputChange={this.handleSearch} onChecked={this.handleFilter} />
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




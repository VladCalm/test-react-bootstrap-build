import React from 'react';
import { Task } from "./Task";
import { tasks } from "../tasks";
import 'bootstrap/dist/css/bootstrap.min.css';

export class TaskTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks

        }

    }
    renderTask(task) {
        return (
            <Task task={task} />
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Город</th>
                    <th scope="col">Название</th>
                    <th scope="col">Выполнить до</th>
                    <th scope="col">Сумма</th>
                </tr>
                </thead>
                <tbody className="table-body">
                {this.state.tasks.map(this.renderTask)}
                </tbody>


            </table>
        )
    }
}


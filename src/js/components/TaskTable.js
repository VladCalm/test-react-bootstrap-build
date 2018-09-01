import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Task} from "./Task";

export const TaskTable = () => (
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
            <Task />
            <Task />
        </tbody>


    </table>
)
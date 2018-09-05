import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TasksNav = ({ match }) => (

    <div>
        <h3 className='task-topic'>Задания</h3>
        <div className='tasks-nav'>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to={`${match.url}/new`} activeClassName="active" className="nav-link task-link">Новые<span className="badge badge-light">1</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/in_work`} activeClassName="active" className="nav-link task-link">В работе<span className="badge badge-light new">1</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/considering`} activeClassName="active" className="nav-link task-link">На рассмотрении<span className="badge badge-light">1</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/done`} activeClassName="active" className="nav-link task-link">Выполнены<span className="badge badge-light">187</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/canceled`} activeClassName="active" className="nav-link task-link">Отменены<span className="badge badge-light">4</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/scratches`} activeClassName="active" className="nav-link task-link">Черновики<span className="badge badge-light">7</span></NavLink>
                </li>
            </ul>
        </div>
    </div>
)
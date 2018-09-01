import React from 'react';
import {Link} from "react-router-dom";


export const TasksNav = ({ match }) => (
    <div>
        <h3 className='task-topic'>Задания</h3>
        <div className='tasks-nav'>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={`${match.url}/new`} className="nav-link">Новые<span className="badge badge-light">1</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`${match.url}/in_work`} className="nav-link">В работе<span className="badge badge-light">1</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`${match.url}/considering`} className="nav-link">На рассмотрении<span className="badge badge-light">1</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`${match.url}/done`} className="nav-link">Выполнены<span className="badge badge-light">187</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`${match.url}/canceled`} className="nav-link">Отменены<span className="badge badge-light">4</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={`${match.url}/scratches`} className="nav-link">Черновики<span className="badge badge-light">7</span></Link>
                </li>
            </ul>
        </div>
    </div>

)
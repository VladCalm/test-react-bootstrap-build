import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { UserBoard} from "./UserBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import icon2 from '../../assets/ic-help-outline-24-px-copy-3.png';
import icon1 from '../../assets/ic-notifications-black-24-px.png';


export const Header = () => (
    <header>
        <nav className="navbar navbar-expand flex-column flex-md-row bd-navbar">
            <Link to='/' className="navbar-brand" >taskon</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/tasks/new' className="nav-link" activeClassName="active-head">Задания </NavLink>
                </li>
                <li className="nav-item pl-20">
                    <NavLink to='/finance' className="nav-link" activeClassName="active-head">Финансы</NavLink>
                </li>
                <li className="nav-item pl-20">
                    <NavLink to='/about' className="nav-link" activeClassName="active-head">Компания</NavLink>
                </li>
                <li className="nav-item pl-20">
                    <NavLink to='/statistics' className="nav-link" activeClassName="active-head">Статистика</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                    <a className="nav-link" href="#">Баланс</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#'><img className="icon-ntf" src={icon1}  alt='icon' /></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle user" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                       Никита Ласточкин
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#'><img className="icon-help" src={icon2} alt='icon' /></a>
                </li>
            </ul>
        </nav>

    </header>
)
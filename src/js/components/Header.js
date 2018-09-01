import React from 'react';
import { Link, Route } from 'react-router-dom';
import { UserBoard} from "./UserBoard";


export const Header = () => (
    <header>
        <nav className="navbar navbar-expand flex-column flex-md-row bd-navbar">
            <Link to='/' className="navbar-brand" >taskon</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/tasks' className="nav-link">Задания </Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link" >Финансы</Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link" >Компания</Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link" >Статистика</Link>
                </li>
            </ul>
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                    <a className="nav-link" href="#">Баланс</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><img src='../../assets/ic-help-outline-24-px-copy-3@2x.png'  alt='icon' /></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
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
                    <a className="nav-link"><img src='../../assets/ic-notifications-black-24-px@2x.png' alt='icon' /></a>
                </li>
            </ul>
        </nav>

    </header>
)
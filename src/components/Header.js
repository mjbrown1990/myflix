import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__left">
            <h4>
                <NavLink to="/" className="header__logo">MyFlix</NavLink>
            </h4>

            <ul className="nav nav--primary">
                <li className="nav__item">
                    <NavLink to="/" className="nav__link" activeClassName="nav__link--active">Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/series" className="nav__link" activeClassName="nav__link--active">Series</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/films" className="nav__link" activeClassName="nav__link--active">Films</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/latest" className="nav__link" activeClassName="nav__link--active">Latest</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/my-list" className="nav__link" activeClassName="nav__link--active">My List</NavLink>
                </li>
            </ul>
        </div>

        <div className="header__right">
            <div className="nav nav--secondary">
                <div className="nav__element">
                    <span className="fas fa-search"></span>
                </div>
                <div className="nav__element">
                    <span className="fas fa-bell"></span>
                </div>
                <div className="nav__element">Profile</div>
            </div>
        </div>
    </header>
);

export default Header
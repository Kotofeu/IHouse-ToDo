import React from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header({ props }) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <img src={logo} alt='Time logo' className='header__logo-img' />
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            {props.map(link =>
                                <li className='header__nav-item' key={link.text}>
                                    <NavLink className='header__nav-link'
                                        to={link.link}>
                                        {link.text}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    );
}

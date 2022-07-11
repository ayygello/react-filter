import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__menu'>
            <div className='header__logo'>
              <Logo />
              <div className='header__logo_text'>Agency</div>
            </div>
            <div className='header__nav'>
              <NavLink to='/'>About</NavLink>
              <NavLink to='/'>Services</NavLink>
              <NavLink to='/'>Pricing</NavLink>
              <NavLink to='/'>Blog</NavLink>
            </div>
            <button className='header__contact'>CONTACT</button>
          </div>

          <div className='header__body'>
            <div className='header__title'>Portfolio</div>
            <p className='header__text'>
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

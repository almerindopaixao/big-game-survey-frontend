import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './styles.css';

const Header = (): JSX.Element => (
  <header className="main-header">
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/">
      <div className="logo-text">
        <span className="logo-text-1">Big Game</span>
        <span className="logo-text-2"> Survey</span>
      </div>
    </Link>
  </header>
);

export default Header;

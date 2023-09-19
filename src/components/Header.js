import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/arrow_back.svg';
import menu from '../assets/menu.png';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>Game of Thrones Character</h1>
    </div>
    <img src={menu} alt="menu" />
  </header>
);

export default Header;

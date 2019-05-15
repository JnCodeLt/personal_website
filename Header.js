import React from 'react';
import './bootstrap/css/bootstrap.css';
import HomeButton from './HomeButton.js';
import PortfolioButton from './PortfolioButton.js';
import ContactsButton from './ContactsButton.js';

function Header() {
  return (
      <ul className='nav justify-content-center fill'>
        <li className="nav-item active">
          <HomeButton />
        </li>
        <li className="nav-item active">
          <PortfolioButton />
        </li>
        <li className="nav-item active">
          <ContactsButton />
        </li>
      </ul>
  );
}

export default Header;

import React from 'react';
import './bootstrap/css/bootstrap.css';
import { Link } from 'react-router';

function HomeButton() {
  return (
    <Link to='/home' >
      Home
    </Link>
  );
}

export default HomeButton;

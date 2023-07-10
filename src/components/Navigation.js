import React from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css'

const pages = [
  {
    id: '/',
    path: '/',
    name: 'Home',
  },
  {
    id: 'calculator',
    path: '/calculator',
    name: 'Calculator',
  },
  {
    id: 'quote',
    path: '/quote',
    name: 'Quote',
  },
];

const Navigation = () => {
  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="nav-items">
        {pages.map((page) => (
          <li key={page.id}>
            <Link to={page.id}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

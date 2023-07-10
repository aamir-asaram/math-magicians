import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    id: 'home',
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
      <ul>
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

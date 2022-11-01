import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const activeClassName = 'active-link';

  return (
    <nav className="navBar">
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}

        </button>
        {links.map((link) => (
          <li key={link.id}>
            {' '}
            <NavLink
              to={link.path}
              end
              className={({ isActive }) => (isActive ? activeClassName : null)}
              onClick={() => closeMenu()}
            >
              {link.text}

            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

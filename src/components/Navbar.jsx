import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarWrapper = styled.nav`
  background-color: #222;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  margin: 0;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    ${({ isOpen }) => css`
      position: fixed;
      top: 0;
      right: 0;
      width: 70%;
      height: 100vh;
      background-color: #111;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;
      overflow-x: hidden;
      z-index: 999;
      display: flex;
    `}
  }
`;

const MenuItem = styled.li`
  font-size: 1.1rem;
  text-transform: uppercase;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color:rgb(142, 133, 132);
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Prevent body scroll when mobile menu is open
const BodyScrollLock = isOpen => {
  if (isOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      BodyScrollLock(!prev);
      return !prev;
    });
  };

  const closeMenu = () => {
    BodyScrollLock(false);
    setMenuOpen(false);
  };

  return (
    <NavbarWrapper>
      <Logo>FamaX</Logo>
      <MobileIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <Menu isOpen={menuOpen}>
        <MenuItem onClick={closeMenu}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="/about">About</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="/services">Services</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="/reviews">Reviews</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="/contact">Contact</Link></MenuItem>
      </Menu>
    </NavbarWrapper>
  );
};

export default Navbar;

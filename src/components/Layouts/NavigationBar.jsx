import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f2f2f2;
`;

const StyledHamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    background-color: #333;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }
`;

const StyledNavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    margin-left: 20px;
  }

  & a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
`;

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleHamburgerButtonClick = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <StyledNavbar>
      <StyledHamburgerButton onClick={handleHamburgerButtonClick}>
        Hamburger Button
      </StyledHamburgerButton>

      {showNavLinks && (
        <StyledNavLinks>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="LaunchPad">LaunchPad</a>
          </li>
          <li>
            <a href="Games">Games</a>
          </li>
          <li>
            <a href="Staking">Staking</a>
          </li>
          <li>
            <a href="Markets">Markets</a>
          </li>
        </StyledNavLinks>
      )}
    </StyledNavbar>
  );
};

export default Navbar;

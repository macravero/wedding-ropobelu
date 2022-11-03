import React from 'react';
import styled from 'styled-components';
import PageLogo from '../../assets/PageLogo.png';

const StyledNav = styled.nav`
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  bottom: calc(100vh - 48%);
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 10;
  gap: 20px;
  font-weight: 600;
  padding: 24px 36px;
`;
const StyledLogo = styled.img`
  cursor: pointer;
`;
const StyledButton = styled.button`
  border: none;
  background: white;
  font-family: 'Proxima Nova';
  font-size: 16px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 50%;
    height: 3px;
    background-color: #f55734;
    transform: scaleX(0);
    transform-origin: bottom left;

    transition: transform 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 50%;
    height: 3px;
    background-color: #f55734;
    transform: scaleX(0);
    transform-origin: bottom right;

    transition: transform 0.3s;
  }
  &:hover {
    cursor: pointer;
    &:before {
      transform: scaleX(1);
    }

    &:after {
      transform: scaleX(1);
    }
  }
`;
const buttons = [
  { text: 'CEREMONIA', link: '#ceremony' },
  { text: 'FIESTA', link: '#party' },
  { text: 'REGALOS', link: '#gifts' },
  { text: 'RSVP', link: '#rsvp' },
];
const Navbar = () => {
  return (
    <StyledNav>
      <StyledLogo src={PageLogo} onClick={() => (window.location.href = '#')} />
      {buttons.map((button) => (
        <StyledButton
          key={button.text}
          onClick={() =>
            button.link.includes('#')
              ? (window.location.href = button.link)
              : window.open(button.link, '_blank')
          }
        >
          {button.text}
        </StyledButton>
      ))}
    </StyledNav>
  );
};

export default Navbar;

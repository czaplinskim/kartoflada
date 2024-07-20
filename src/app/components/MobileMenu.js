"use client"

import styled from "styled-components";


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: 'GothamXNarrow', sans-serif;
  justify-content: center;
  z-index: 3;
  width: 100%;
  background: #2e3192;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;


  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 48px;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #f7cc47;
    }
  }
`;

const MobileMenu = ({ open, updateOpenFromChildren}) => {

  const handleClick = () => {
    console.log('raz')
    updateOpenFromChildren(false)
  }

  return (
    <StyledMenu open={open}>   
        <a href='#about' onClick={handleClick}>O IMPREZIE</a>
        <a href='#glosuj' onClick={handleClick}>GŁOSOWANIE</a>
        <a href='#schedule' onClick={handleClick}>PLAN IMPREZY</a>
    </StyledMenu>
  );
};

export default MobileMenu;

import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <img src="images/logo.svg" alt="logo" />
      <Menu>
        <a href="#">Model 3</a>
        <a>Model S</a>
        <a>Model X</a>
        <a>Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a>account</a>
        <a>
          <MenuIcon onClick={(_) => {setBurgerStatus(true)}} />
        </a>
      </RightMenu>
      <BurgerNav burgerStatus={burgerStatus}>
        <CustomCloseIcon onClick={(_) => {setBurgerStatus(false)}}/>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  min-height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  a {
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  a {
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

const BurgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
  list-style-type: none;
  background-color: white;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  padding: 16px;
  width: 300px;
  z-index: 100;
  transform: ${(props) => props.burgerStatus ? "translateX(0%)" : "translateX(100%)"};
  
  li {
    padding: 8px 0px;
    border-bottom: 1px solid #333;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 600;
  }

  li a {
    text-decoration: none;

  }
`

const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  align-self: flex-end;
`

export default Header;

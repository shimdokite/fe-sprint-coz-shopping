import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropdownMenu from "./Dropdown";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftPart>
        <GoToMain to="/">
          <img
            className="logo"
            src="/images/logo.png"
            alt="COZ shopping logo"
          />
          <HeaderLogo>COZ Shopping</HeaderLogo>
        </GoToMain>
      </HeaderLeftPart>
      <DropdownMenu />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  border: 1px solid white;
  box-shadow: 1px 0px 15px 5px #c4c4c4;
  max-width: 100%;
  height: 70px;
  padding: 0 76px;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;

const HeaderLeftPart = styled.div`
  > a {
    /* a는 빼주어야 한다 */
    /* Link => a */
    text-decoration: none;
    color: black;
  }
`;

const GoToMain = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  > .logo {
    width: 50px;
    height: 50px;
  }
`;

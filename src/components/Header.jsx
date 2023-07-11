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
          <h1>COZ Shopping</h1>
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
  box-shadow: 0px 7px 6px -4px #c4c4c4;
  height: 70px;
  padding: 0 76px;
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
  gap: 12px;

  > .logo {
    width: 50px;
    height: 50px;
  }

  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

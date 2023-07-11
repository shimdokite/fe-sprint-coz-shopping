import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../hooks/useDetectClose";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          <img src="/images/hambuger.png" alt="hambuger button" />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper>ooo님, 안녕하세요!</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper to="/products/list">
                <img
                  src="/images/itemIcon.png"
                  alt="itemIcon button"
                  className="icon"
                />
                상품리스트 페이지
              </LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper to="/bookmark">
                <img
                  src="/images/bookmarkIcon.png"
                  alt="bookmark button"
                  className="icon"
                />
                북마크 페이지
              </LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
  /* text-align: center; */
`;

const DropdownButton = styled.div``;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 150px;
  padding: 10px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;

  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  cursor: pointer;
  margin: 0 5px 0 0;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 16px;
  text-decoration: none;
  color: black;

  > .icon {
    margin: 0 0 3px 0;
  }
`;

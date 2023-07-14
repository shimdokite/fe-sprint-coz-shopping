import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../../hooks/useDetectClose";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          <img
            src="/images/hambuger.png"
            alt="hambuger button"
            className="hambuger"
          />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <Ul>
            <Li>
              <div>ooo님, 안녕하세요!</div>
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

const DropdownButton = styled.div`
  cursor: pointer;

  > .hambuger {
    width: 30px;
    height: 20px;
  }
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 200px;
  /* padding: 10px; */

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;

  transform: translate(-70%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 999;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 70%;
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
      transform: translate(-70%, 0);
    `};
`;

const Ul = styled.ul`
  & > li {
    /* margin-bottom: 10px; */
  }

  & > li:first-of-type {
    /* margin-top: 10px; */
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;

  &:first-child {
    display: flex;
    justify-content: center;

    padding: 10px 0;
  }
  &:last-child {
    border: none;
  }
`;

const LinkWrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 0 10px 30px;

  font-size: 16px;
  text-decoration: none;
  color: black;

  width: 100%;

  > .icon {
    margin: 0 0 3px 0;
    width: 20px;
    height: 20px;
  }
`;

import React from "react";
import { ItemLists } from "../components/ItemLists";
import { BookmarkLists } from "../components/BookmarkLists";
import styled from "styled-components";

export const Main = () => {
  return (
    <MainContainer>
      <ItemLists />
      <BookmarkLists />
    </MainContainer>
  );
};

const MainContainer = styled.main``;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ItemLists } from "../components/main/ItemLists";
import { BookmarkLists } from "../components/main/BookmarkLists";

export const Main = () => {
  const products = useSelector((state) => state.productsReducer?.products);
  const bookmark = products?.filter((cur) => cur.isBookmark);

  return (
    <MainContainer>
      <ItemLists />
      {bookmark?.length > 0 ? (
        <BookmarkLists />
      ) : (
        <NonBookmark>북마크가 없습니다.</NonBookmark>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: 700px;
`;

const NonBookmark = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 700;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/api";
import { ItemLists } from "../components/main/ItemLists";
import { BookmarkLists } from "../components/main/BookmarkLists";

export const Main = () => {
  const [item, setItem] = useState([]);

  const products = useSelector((state) => state.productsReducer?.products);
  const bookmark = useSelector((state) => state.productsReducer.bookmark);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setItem([
      products[Math.floor(Math.random() * products?.length)],
      products[Math.floor(Math.random() * products?.length)],
      products[Math.floor(Math.random() * products?.length)],
      products[Math.floor(Math.random() * products?.length)],
    ]);
  }, [products]);

  return (
    <MainContainer>
      <ItemLists item={item} />
      {bookmark && bookmark?.length ? (
        <BookmarkLists bookmark={bookmark} />
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

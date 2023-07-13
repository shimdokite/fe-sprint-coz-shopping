import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ItemLists } from "../components/ItemLists";
import { BookmarkLists } from "../components/BookmarkLists";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/api";

export const Main = () => {
  const [item, setItem] = useState([]);

  const products = useSelector((state) => state.productsReducer.products);
  const bookmark = useSelector((state) => state.productsReducer.bookmark);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setItem([
      products[Math.floor(Math.random() * products.length)],
      products[Math.floor(Math.random() * products.length)],
      products[Math.floor(Math.random() * products.length)],
      products[Math.floor(Math.random() * products.length)],
    ]);
  }, [products]);

  return (
    <MainContainer>
      <ItemLists item={item} />
      {bookmark && bookmark.length ? (
        <BookmarkLists bookmark={bookmark} />
      ) : (
        <div>북마크가 없습니다.</div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: 700px;
`;

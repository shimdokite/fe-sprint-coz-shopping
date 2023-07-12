import React from "react";
import { ItemLists } from "../components/ItemLists";
import { BookmarkLists } from "../components/BookmarkLists";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { sliceProducts } from "../js/sliceProducts";

export const Main = () => {
  const state = useSelector((state) => state.productsReducer);
  const { products = [], bookmark = [] } = state;

  const all_products = sliceProducts(products, "All");
  const bookmark_products = sliceProducts(bookmark, "Bookmark");

  return (
    <MainContainer>
      <ItemLists all_products={all_products} />
      {bookmark_products.length ? (
        <BookmarkLists bookmark_products={bookmark_products} />
      ) : null}
    </MainContainer>
  );
};

const MainContainer = styled.main``;

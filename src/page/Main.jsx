import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ItemLists } from "../components/ItemLists";
import { BookmarkLists } from "../components/BookmarkLists";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/api";

export const Main = () => {
  const [item, setItem] = useState([]);
  const products = useSelector((state) => state.productsReducer.products);
  // const bookmark = useSelector((state) => state.productsReducer.bookmark);

  // const sliceProducts = (products, type) => {
  //   if (type === "ALL") {
  //     console.log([

  //     ]);
  //   }
  // };

  // const allProducts = sliceProducts(products, "All");
  // const bookmark_products = sliceProducts(bookmark, "Bookmark");

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
      {/* {bookmark_products?.length ? (
        <BookmarkLists bookmark_products={bookmark} />
      ) : null} */}
    </MainContainer>
  );
};

const MainContainer = styled.main``;

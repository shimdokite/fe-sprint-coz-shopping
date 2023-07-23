import React from "react";
import * as p from "../style/Page";

import { useSelector } from "react-redux";
import { ItemLists } from "../components/main/ItemLists";
import { BookmarkLists } from "../components/main/BookmarkLists";

export const Main = () => {
  const products = useSelector((state) => state.productsReducer?.products);
  const bookmark = products?.filter((cur) => cur.isBookmark);

  return (
    <p.MainContainer>
      <ItemLists />
      {bookmark?.length > 0 ? (
        <BookmarkLists />
      ) : (
        <p.NonBookmark>북마크가 없습니다.</p.NonBookmark>
      )}
    </p.MainContainer>
  );
};

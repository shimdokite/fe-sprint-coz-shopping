import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBookmark } from "../../actions";
import * as b from "../../style/Bookmark";

export const SwitchBookmark = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const [curItem, setCurItem] = useState(product);

  const handleChangeBookmark = () => {
    dispatch(changeBookmark(product));
  };

  useEffect(() => {
    products.forEach((cur) => cur.id === product.id && setCurItem(cur));
  }, [products]);

  return (
    <b.BookmarkContainter onClick={() => handleChangeBookmark(product)}>
      {curItem.isBookmark ? <b.BookmarkOn /> : <b.BookmarkOff />}
    </b.BookmarkContainter>
  );
};

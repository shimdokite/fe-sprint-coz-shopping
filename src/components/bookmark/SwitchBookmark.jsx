import React, { useEffect, useState } from "react";
import styled from "styled-components";
import iconOn from "../../assets/iconOn.png";
import iconOff from "../../assets/iconOff.png";
import { useDispatch, useSelector } from "react-redux";
import { changeBookmark } from "../../actions";

export const SwitchBookmark = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const [curItem, setCurItem] = useState(product);

  const handleChangeBookmark = () => {
    dispatch(changeBookmark(product.id));
  };

  useEffect(() => {
    products.forEach((cur) => cur.id === product.id && setCurItem(cur));
  }, [products]);

  return (
    <BookmarkContainter onClick={() => handleChangeBookmark(product.id)}>
      {curItem.isBookmark ? <BookmarkOn /> : <BookmarkOff />}
    </BookmarkContainter>
  );
};

const BookmarkContainter = styled.div``;

const BookmarkOn = styled.img.attrs({
  src: `${iconOn}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

const BookmarkOff = styled.img.attrs({
  src: `${iconOff}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

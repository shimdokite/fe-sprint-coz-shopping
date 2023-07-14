import React, { useEffect, useState } from "react";
import styled from "styled-components";

import all from "../assets/all.png";
import product from "../assets/product.png";
import category from "../assets/category.png";
import exhibition from "../assets/exhibition.png";
import brand from "../assets/brand.png";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/api";
import { BookmarkList } from "../components/bookmark/BookmarkList";

export const Bookmark = () => {
  const typeItem = [
    {
      type: "전체",
      img: all,
    },
    {
      type: "상품",
      img: product,
    },
    {
      type: "카테고리",
      img: category,
    },
    {
      type: "기획전",
      img: exhibition,
    },
    {
      type: "브랜드",
      img: brand,
    },
  ];

  const bookmark = useSelector((state) => state.productsReducer.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <TypeContainer>
        {typeItem.map((cur, idx) => (
          <Typefilter key={`${cur} + ${idx}`}>
            <TypeFilterImg src={cur.img} alt={cur.type} />
            <TypefilterTitle>{cur.type}</TypefilterTitle>
          </Typefilter>
        ))}
      </TypeContainer>
      <BookmarkList item={bookmark} />
    </>
  );
};

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
`;

const Typefilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  /* height: 500px; */
`;

const TypeFilterImg = styled.img`
  cursor: pointer;
  width: 82px;
  height: 82px;
  border-radius: 50%;
`;

const TypefilterTitle = styled.div`
  cursor: pointer;
  margin-top: 10px;
`;

export default Bookmark;

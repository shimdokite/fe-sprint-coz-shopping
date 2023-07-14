import React, { useEffect, useState } from "react";
import styled from "styled-components";

import all from "../assets/all.png";
import product from "../assets/product.png";
import category from "../assets/category.png";
import exhibition from "../assets/exhibition.png";
import brand from "../assets/brand.png";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/api";

import { All } from "../components/type/All";
import { Product } from "../components/type/Product";
import { Category } from "../components/type/Category";
import { Exhibition } from "../components/type/Exhibition";
import { Brand } from "../components/type/Brand";

export const Products = () => {
  const item = useSelector((state) => state.productsReducer?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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

  const [tab, setTab] = useState(0);

  const tabs = [
    <>
      <All item={item} />
    </>,
    <>
      <Product item={item} />
    </>,
    <>
      <Category item={item} />
    </>,
    <>
      <Exhibition item={item} />
    </>,
    <>
      <Brand item={item} />
    </>,
  ];

  const handleChagneTab = (type) => {
    console.log(type);
    if (type === "상품") {
      setTab(1);
    } else if (type === "카테고리") {
      setTab(2);
    } else if (type === "기획전") {
      setTab(3);
    } else if (type === "브랜드") {
      setTab(4);
    } else {
      setTab(0);
    }
  };

  return (
    <>
      <TypeContainer>
        {typeItem.map((cur, idx) => (
          <Typefilter key={`${cur} + ${idx}`}>
            <TypeFilterImg
              src={cur.img}
              alt={cur.type}
              onClick={() => handleChagneTab(cur.type)}
            />
            <TypefilterTitle>{cur.type}</TypefilterTitle>
          </Typefilter>
        ))}
      </TypeContainer>
      {tabs[tab]}
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

export default Products;

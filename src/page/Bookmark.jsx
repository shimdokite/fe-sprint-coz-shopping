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
  // dispatch 는 부모 컴포넌트에 두기
  const dispatch = useDispatch();

  const typeItem = [
    {
      name: "전체",
      type: "All",
      img: all,
    },
    {
      name: "상품",
      type: "Product",
      img: product,
    },
    {
      name: "카테고리",
      type: "Category",
      img: category,
    },
    {
      name: "기획전",
      type: "Exhibition",
      img: exhibition,
    },
    {
      name: "브랜드",
      type: "Brand",
      img: brand,
    },
  ];

  // const [tab, setTab] = useState(0);

  // const tabs = [
  //   <>
  //     <All item={item} />
  //   </>,
  //   <>
  //     <Product item={item} />
  //   </>,
  //   <>
  //     <Category item={item} />
  //   </>,
  //   <>
  //     <Exhibition item={item} />
  //   </>,
  //   <>
  //     <Brand item={item} />
  //   </>,
  // ];

  // const handleChagneTab = (type) => {
  //   console.log(type);
  //   if (type === "상품") {
  //     setTab(1);
  //   } else if (type === "카테고리") {
  //     setTab(2);
  //   } else if (type === "기획전") {
  //     setTab(3);
  //   } else if (type === "브랜드") {
  //     setTab(4);
  //   } else {
  //     setTab(0);
  //   }
  // };

  const [tabs, setTabs] = useState("All");
  const handleChagneTab = (type) => {
    setTabs(type);
  };

  // console.log(tabs);

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
            <TypefilterTitle
              active={tabs === cur.type}
              onClick={() => handleChagneTab(cur.type)}
            >
              {cur.name}
            </TypefilterTitle>
          </Typefilter>
        ))}
      </TypeContainer>
      {/* {tabs[tab]} */}
      <BookmarkList tabs={tabs} />
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
  color: ${(props) => (props.active ? "#412DD4" : "black")};
  font-weight: ${(props) => (props.active ? "700" : "none")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: ${(props) => (props.active ? "3px" : "0")};
    background-color: ${(props) => (props.active ? "#412DD4" : "transparent")};
  }
`;

export default Bookmark;

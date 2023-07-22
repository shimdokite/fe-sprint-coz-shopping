import React, { useState } from "react";
import * as p from "../style/Page";

import all from "../assets/all.png";
import product from "../assets/product.png";
import category from "../assets/category.png";
import exhibition from "../assets/exhibition.png";
import brand from "../assets/brand.png";

import { Product } from "../components/type/Product";

export const Products = () => {
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

  const [tabs, setTabs] = useState("All");
  const handleChagneTab = (type) => {
    setTabs(type);
  };

  return (
    <>
      <p.TypeContainer>
        {typeItem.map((cur, idx) => (
          <p.Typefilter key={`${cur} + ${idx}`}>
            <p.TypeFilterImg
              src={cur.img}
              alt={cur.type}
              onClick={() => handleChagneTab(cur.type)}
            />
            <p.TypefilterTitle
              active={tabs === cur.type}
              onClick={() => handleChagneTab(cur.type)}
            >
              {cur.name}
            </p.TypefilterTitle>
          </p.Typefilter>
        ))}
      </p.TypeContainer>
      <Product tabs={tabs} />
    </>
  );
};

export default Products;

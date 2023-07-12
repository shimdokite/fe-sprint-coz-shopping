import React, { useEffect } from "react";
import styled from "styled-components";

export const ItemLists = ({ item }) => {
  return (
    <ItemContainer>
      상품리스트
      {/* <div>{item}</div> */} {/* mapping */}
    </ItemContainer>
  );
};

const ItemContainer = styled.div``;

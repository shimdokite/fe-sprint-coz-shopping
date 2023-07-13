import React, { useEffect } from "react";
import styled from "styled-components";
import iconOff from "../assets/iconOff.png";

export const ItemLists = ({ item }) => {
  console.log(item);
  return (
    <ItemListsMain>
      <MainTitle>
        <div className="item_list">상품 리스트</div>
      </MainTitle>
      <ItemContainer>
        {item.map((product) => (
          <Items>
            {product.type === "Brand" && (
              <>
                <ItemImg>
                  <BookmarkOff />
                  <img className="product_img" src={product.brand_image_url} />
                </ItemImg>
                <ItemDetail>
                  <ItemTitle>{product.brand_name}</ItemTitle>
                  <ItemFollow>
                    <div className="follwer_title">관심 고객수</div>
                    <div className="product_follwer">
                      {Number(product.follower).toLocaleString()}
                    </div>
                  </ItemFollow>
                </ItemDetail>
              </>
            )}
            {product.type === "Category" && (
              <>
                <ItemImg>
                  <img className="product_img" src={product.image_url} />
                </ItemImg>
                <ItemTitle># {product.title}</ItemTitle>
              </>
            )}
            {product.type === "Product" && (
              <>
                <ItemImg>
                  <BookmarkOff />
                  <img className="product_img" src={product.image_url} />
                </ItemImg>
                <ItemDetail>
                  <ItemTitle>{product.title}</ItemTitle>
                  <ItemPrice>
                    <div className="discount">
                      {product.discountPercentage}%
                    </div>
                    <div> {Number(product.price).toLocaleString()}원</div>
                  </ItemPrice>
                </ItemDetail>
              </>
            )}
            {product.type === "Exhibition" && (
              <>
                <ItemImg>
                  <BookmarkOff />
                  <img className="product_img" src={product.image_url} />
                </ItemImg>
                <ItemTitle>{product.title}</ItemTitle>
                <ItemSubTitle>{product.sub_title}</ItemSubTitle>
              </>
            )}
          </Items>
        ))}
      </ItemContainer>
    </ItemListsMain>
  );
};

const ItemListsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainTitle = styled.div`
  width: 1280px;
  padding: 0 76px;
  margin: 25px 0 10px 0;

  > .item_list {
    font-weight: 600;
    font-size: 24px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 76px;
`;

const Items = styled.section``;

const BookmarkOff = styled.img.attrs({
  src: `${iconOff}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 5%;
  bottom: 7%;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  position: relative;
  > .product_img {
    border-radius: 12px;
    width: 264px;
    height: 210px;
  }
`;

const ItemTitle = styled.div`
  font-weight: 800;
  margin: 5px 0 0 0;
`;

const ItemFollow = styled.div`
  margin: 5px 0 0 0;
  > .follwer_title {
    font-weight: 800;
  }
  > .product_follwer {
    text-align: end;
  }
`;

const ItemSubTitle = styled.div``;

const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  > .discount {
    text-align: end;
    color: #452cdd;
    font-weight: 800;
  }
`;

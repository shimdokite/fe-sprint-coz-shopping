import React, { useEffect, useState } from "react";
import styled from "styled-components";
import iconOn from "../assets/iconOn.png";

export const BookmarkLists = ({ bookmark }) => {
  const [mark, setMark] = useState([]);

  useEffect(() => {
    const uniqueMark = [];
    const bookmarkCopy = [...bookmark];

    while (uniqueMark.length < 4 && bookmarkCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * bookmarkCopy.length);
      const randomProduct = bookmarkCopy.splice(randomIndex, 1)[0];
      uniqueMark.push(randomProduct);
    }

    setMark(uniqueMark);
  }, [bookmark]);

  // console.log(bookmark);
  // console.log(mark);
  return (
    <ItemListsMain>
      <MainTitle>
        <div className="bookmark_list">북마크 리스트</div>
      </MainTitle>
      <ItemContainer>
        {mark.map((product, idx) => (
          <Items key={`${idx} + ${product}`}>
            {product?.type === "Brand" && (
              <>
                <ItemImg>
                  <BookmarkOn />
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
            {product?.type === "Category" && (
              <>
                <ItemImg>
                  <BookmarkOn />
                  <img className="product_img" src={product.image_url} />
                </ItemImg>
                <ItemTitle># {product.title}</ItemTitle>
              </>
            )}
            {product?.type === "Product" && (
              <>
                <ItemImg>
                  <BookmarkOn />
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
            {product?.type === "Exhibition" && (
              <>
                <ItemImg>
                  <BookmarkOn />
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

  > .bookmark_list {
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

const BookmarkOn = styled.img.attrs({
  src: `${iconOn}`,
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

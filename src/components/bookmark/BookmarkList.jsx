import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import closed from "../../assets/closed.png";
import { useSelector } from "react-redux";
import { SwitchBookmark } from "./SwitchBookmark";
import { SwitchModalBookmark } from "./SwitchModalBookmark";

export const BookmarkList = ({ tabs }) => {
  const [count, setCount] = useState(2);
  const countRef = useRef(count);
  // 자식 컴포넌트에서 useSelector 로 state 뽑아오기
  const item = useSelector((state) => state.productsReducer?.products);
  const [sliceItem, setSliceItem] = useState(item?.slice(0, count * 10));
  const [filteredItem, setFilterdItem] = useState(sliceItem);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const handleOpenModal = (product) => {
    setIsOpen(!isOpen);
    setModalData(product);
  };

  useEffect(() => {
    // 모달이 열릴 때 body에 스크롤 방지 스타일을 추가
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // 컴포넌트가 언마운트될 때 스타일을 원래대로 복구
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (modalData) {
      filteredItem.forEach(
        (cur) => cur.id === modalData.id && setModalData(cur)
      );
    }
  }, [filteredItem]);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    if (count - 1 * 10 < item.length) {
      setSliceItem(item.slice(0, count * 10));
    } else {
      setSliceItem(item.slice(0, item.length));
    }
  }, [item, count]);

  useEffect(() => {
    switch (tabs) {
      case "All":
        setFilterdItem(sliceItem);
        break;

      case "Product":
        setFilterdItem(item.filter((cur) => cur.type === "Product"));
        break;

      case "Category":
        setFilterdItem(item.filter((cur) => cur.type === "Category"));
        break;

      case "Exhibition":
        setFilterdItem(item.filter((cur) => cur.type === "Exhibition"));
        break;

      case "Brand":
        setFilterdItem(item.filter((cur) => cur.type === "Brand"));
        break;

      default:
        setFilterdItem(sliceItem);
        break;
    }
  }, [tabs, sliceItem, item]);

  // 무한 스크롤
  const targetRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      console.log("로오오오오오오딩!");

      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ItemListsMain>
      {isOpen ? (
        <ModalContainer onClick={() => handleOpenModal(modalData)}>
          <ModalBackdrop>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ModalImg
                backgroundImg={
                  modalData.brand_image_url
                    ? modalData.brand_image_url
                    : modalData.image_url
                }
              >
                <ModalTop>
                  <ExitBtn onClick={() => handleOpenModal(modalData)} />
                </ModalTop>
                <ModalBottom>
                  <SwitchModalBookmark product={modalData} />
                  <ModalItemTitle>
                    {modalData.type === "Brand" ? modalData.brand_name : null}
                    {modalData.type === "Category"
                      ? `# ${modalData.title}`
                      : null}
                    {(modalData.type === "Product") |
                    (modalData.type === "Exhibition")
                      ? modalData.title
                      : null}
                  </ModalItemTitle>
                </ModalBottom>
              </ModalImg>
            </ModalView>
          </ModalBackdrop>
        </ModalContainer>
      ) : null}
      <ItemContainer>
        {filteredItem
          .filter((cur) => cur.isBookmark)
          .map((product, idx) => (
            <Items key={product.id}>
              {product.type === "Brand" && (
                <>
                  <ItemImg
                    onClick={() => handleOpenModal(product)}
                    backgroundImg={product.brand_image_url}
                  >
                    <div onClick={(e) => e.stopPropagation()}>
                      <SwitchBookmark product={product} />
                    </div>
                  </ItemImg>
                  {/* 컴포넌트화 시켜보기 */}
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
                  <ItemImg
                    onClick={() => handleOpenModal(product)}
                    backgroundImg={product.image_url}
                  >
                    <div onClick={(e) => e.stopPropagation()}>
                      <SwitchBookmark product={product} />
                    </div>
                  </ItemImg>

                  <ItemTitle># {product.title}</ItemTitle>
                </>
              )}
              {product.type === "Product" && (
                <>
                  <ItemImg
                    onClick={() => handleOpenModal(product)}
                    backgroundImg={product.image_url}
                  >
                    <div onClick={(e) => e.stopPropagation()}>
                      <SwitchBookmark product={product} />
                    </div>
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
                  <ItemImg
                    onClick={() => handleOpenModal(product)}
                    backgroundImg={product.image_url}
                  >
                    <div onClick={(e) => e.stopPropagation()}>
                      <SwitchBookmark product={product} />
                    </div>
                  </ItemImg>
                  <ItemTitle>{product.title}</ItemTitle>
                  <ItemSubTitle>{product.sub_title}</ItemSubTitle>
                </>
              )}
            </Items>
          ))}
      </ItemContainer>
      <p ref={targetRef}></p>
    </ItemListsMain>
  );
};

/* 상품 리스트 */
const ItemListsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 1500px;

  margin: 20px;
  padding: 0 76px;
`;

const Items = styled.div`
  width: 264px;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  cursor: pointer;

  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 264px;
  height: 210px;

  border-radius: 12px;
`;

const ItemTitle = styled.div`
  font-weight: 800;
  margin: 5px 0 0 0;
  letter-spacing: -1.3px;
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

/* 모달 */
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExitBtn = styled.img.attrs({
  src: `${closed}`,
})`
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  background: none;
  border: none;

  color: white;

  width: 24px;
  height: 24px;
  &:hover {
    color: #452cdd;
  }
`;

const ModalItemTitle = styled(ItemTitle)`
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
`;

const ModalImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 744px;
  height: 480px;
  border-radius: 10px;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ModalBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

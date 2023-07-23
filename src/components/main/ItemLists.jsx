import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { SwitchBookmark } from "../bookmark/SwitchBookmark";
import { SwitchModalBookmark } from "../bookmark/SwitchModalBookmark";
import { getRandomElements } from "../../util/method";

import * as l from "../../style/Lists";

export const ItemLists = () => {
  const products = useSelector((state) => state.productsReducer?.products);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [item, setItem] = useState([]);

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
    if (products) {
      setItem(getRandomElements(products, 4));
    }

    if (modalData) {
      products.forEach((cur) => cur.id === modalData.id && setModalData(cur));
    }
  }, [products]);

  return (
    <l.ItemListsMain>
      <l.MainTitle>
        <div className="item_list">상품 리스트</div>
      </l.MainTitle>
      {isOpen ? (
        <l.ModalContainer onClick={() => handleOpenModal(modalData)}>
          <l.ModalBackdrop>
            <l.ModalView onClick={(e) => e.stopPropagation()}>
              <l.ModalImg
                backgroundImg={
                  modalData.brand_image_url
                    ? modalData.brand_image_url
                    : modalData.image_url
                }
              >
                <l.ModalTop>
                  <l.ExitBtn onClick={() => handleOpenModal(modalData)} />
                </l.ModalTop>
                <l.ModalBottom>
                  <SwitchModalBookmark product={modalData} />
                  <l.ModalItemTitle>
                    {modalData.type === "Brand" ? modalData.brand_name : null}
                    {modalData.type === "Category"
                      ? `# ${modalData.title}`
                      : null}
                    {(modalData.type === "Product") |
                    (modalData.type === "Exhibition")
                      ? modalData.title
                      : null}
                  </l.ModalItemTitle>
                </l.ModalBottom>
              </l.ModalImg>
            </l.ModalView>
          </l.ModalBackdrop>
        </l.ModalContainer>
      ) : null}
      <l.ItemContainer>
        {item.map((product, idx) => (
          <l.Items key={`${idx} + ${product}`}>
            {product.type === "Brand" && (
              <>
                <l.ItemImg
                  onClick={() => handleOpenModal(product)}
                  backgroundImg={product.brand_image_url}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <SwitchBookmark product={product} />
                  </div>
                </l.ItemImg>
                <l.ItemDetail>
                  <l.ItemTitle>{product.brand_name}</l.ItemTitle>
                  <l.ItemFollow>
                    <div className="follwer_title">관심 고객수</div>
                    <div className="product_follwer">
                      {Number(product.follower).toLocaleString()}
                    </div>
                  </l.ItemFollow>
                </l.ItemDetail>
              </>
            )}
            {product.type === "Category" && (
              <>
                <l.ItemImg
                  onClick={() => handleOpenModal(product)}
                  backgroundImg={product.image_url}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <SwitchBookmark product={product} />
                  </div>
                </l.ItemImg>

                <l.ItemTitle># {product.title}</l.ItemTitle>
              </>
            )}
            {product.type === "Product" && (
              <>
                <l.ItemImg
                  onClick={() => handleOpenModal(product)}
                  backgroundImg={product.image_url}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <SwitchBookmark product={product} />
                  </div>
                </l.ItemImg>

                <l.ItemDetail>
                  <l.ItemTitle>{product.title}</l.ItemTitle>
                  <l.ItemPrice>
                    <div className="discount">
                      {product.discountPercentage}%
                    </div>
                    <div> {Number(product.price).toLocaleString()}원</div>
                  </l.ItemPrice>
                </l.ItemDetail>
              </>
            )}
            {product.type === "Exhibition" && (
              <>
                <l.ItemImg
                  onClick={() => handleOpenModal(product)}
                  backgroundImg={product.image_url}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <SwitchBookmark product={product} />
                  </div>
                </l.ItemImg>
                <l.ItemTitle>{product.title}</l.ItemTitle>
                <l.ItemSubTitle>{product.sub_title}</l.ItemSubTitle>
              </>
            )}
          </l.Items>
        ))}
      </l.ItemContainer>
    </l.ItemListsMain>
  );
};

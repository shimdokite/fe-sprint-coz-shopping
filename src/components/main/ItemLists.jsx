import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { SwitchBookmark } from "../bookmark/SwitchBookmark";
import { getRandomElements } from "../../util/method";
import Modal from "../modal/Modal";
import * as l from "../../style/Lists";
import useModal from "../../hooks/useModal";

export const ItemLists = () => {
  const products = useSelector((state) => state.productsReducer?.products);
  const [item, setItem] = useState([]);
  const { isOpen, modalData, setModalData, handleOpenModal } = useModal();

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
      <Modal
        isOpen={isOpen}
        modalData={modalData}
        handleOpenModal={handleOpenModal}
      />
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

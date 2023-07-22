import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SwitchModalBookmark } from "../bookmark/SwitchModalBookmark";
import { SwitchBookmark } from "../bookmark/SwitchBookmark";
import * as l from "../../style/Lists";

export const Product = ({ tabs }) => {
  const [count, setCount] = useState(2);
  const countRef = useRef(count);

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

  /**
   * item > 100개를 기준으로
   *
   * sliceItem > item을 n개로 자른 녀석!
   *
   * item을 기준으로 filteredItem을 set 하는 중 > sliceItem을 기준으로 filteredItem을 set 하는 중
   */

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
      // count++;
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
    <l.ItemListsMain>
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
      <l.ItemContainerB>
        {filteredItem?.map((product, idx) => (
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
                  <l.ItemTitleB>{product.brand_name}</l.ItemTitleB>
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

                <l.ItemTitleB># {product.title}</l.ItemTitleB>
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
                  <l.ItemTitleB>{product.title}</l.ItemTitleB>
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
                <l.ItemTitleB>{product.title}</l.ItemTitleB>
                <l.ItemSubTitle>{product.sub_title}</l.ItemSubTitle>
              </>
            )}
          </l.Items>
        ))}
      </l.ItemContainerB>

      <p ref={targetRef}></p>
    </l.ItemListsMain>
  );
};

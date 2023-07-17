import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closed from "../../assets/closed.png";
import { useSelector } from "react-redux";
import { SwitchModalBookmark } from "../bookmark/SwitchModalBookmark";
import { SwitchBookmark } from "../bookmark/SwitchBookmark";
import { getRandomElements } from "../../util/method";

export const BookmarkLists = () => {
  const products = useSelector((state) => state.productsReducer?.products);
  const bookmark = products.filter((cur) => cur.isBookmark);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [bookmarkList, setBookmarkList] = useState([]);

  const handleOpenModal = (product) => {
    setIsOpen(!isOpen);
    setModalData(product);
  };

  useEffect(() => {
    if (modalData) {
      products.forEach((cur) => cur.id === modalData.id && setModalData(cur));
    }
  }, [products]);

  useEffect(() => {
    if (bookmark.length < 4) {
      setBookmarkList(getRandomElements(bookmark, bookmark.length));
    } else {
      setBookmarkList(getRandomElements(bookmark, 4));
    }
  }, [products]);

  return (
    <ItemListsMain>
      <MainTitle>
        <div className="bookmark_lists">북마크 리스트</div>
      </MainTitle>
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
        {bookmarkList.map((product, idx) => (
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
    </ItemListsMain>
  );
};

/* 북마크 리스트 */
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

  > .bookmark_lists {
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

const Items = styled.section`
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

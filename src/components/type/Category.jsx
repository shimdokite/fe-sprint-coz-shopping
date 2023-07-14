import React, { useEffect, useState } from "react";
import styled from "styled-components";
import iconOff from "../../assets/iconOff.png";
import closed from "../../assets/closed.png";
import { useDispatch } from "react-redux";
import { addToBookmark } from "../../actions";

export const Category = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const dispatch = useDispatch();

  const handleBookmark = (id) => {
    dispatch(addToBookmark(id));
  };

  const handleOpenModal = (product) => {
    setIsOpen(!isOpen);
    setModalData(product);
  };

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
                  <ModalBookMark onClick={() => handleBookmark(modalData.id)} />
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
        {item.map((product, idx) => (
          <Items key={`${idx} + ${product}`}>
            {product.type === "Category" && (
              <>
                <ItemImg
                  onClick={() => handleOpenModal(product)}
                  backgroundImg={product.image_url}
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <BookmarkOff onClick={() => handleBookmark(product.id)} />
                  </div>
                </ItemImg>

                <ItemTitle># {product.title}</ItemTitle>
              </>
            )}
          </Items>
        ))}
      </ItemContainer>
    </ItemListsMain>
  );
};

/* 상품 리스트 */
const ItemListsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 24px; */

  margin: 20px;
  padding: 0 76px;
`;

const Items = styled.div``;

const BookmarkOff = styled.img.attrs({
  src: `${iconOff}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;
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

const ModalBookMark = styled(BookmarkOff)``;
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

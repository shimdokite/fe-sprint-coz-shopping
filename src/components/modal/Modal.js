import React from "react";
import * as l from "../../style/Lists";
import { SwitchModalBookmark } from "../bookmark/SwitchModalBookmark";

const Modal = ({ isOpen, modalData, handleOpenModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
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
                {modalData.type === "Category" ? `# ${modalData.title}` : null}
                {modalData.type === "Product" || modalData.type === "Exhibition"
                  ? modalData.title
                  : null}
              </l.ModalItemTitle>
            </l.ModalBottom>
          </l.ModalImg>
        </l.ModalView>
      </l.ModalBackdrop>
    </l.ModalContainer>
  );
};

export default Modal;

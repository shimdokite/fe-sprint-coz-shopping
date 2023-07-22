import { styled } from "styled-components";
import closed from "../assets/closed.png";

/* Main : 상품, 북마크 리스트 스타일*/
export const ItemListsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MainTitle = styled.div`
  width: 1280px;
  padding: 0 76px;
  margin: 25px 0 10px 0;

  > .item_list {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 76px;
`;

export const Items = styled.section`
  width: 264px;
`;

export const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemImg = styled.div`
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

export const ItemTitle = styled.div`
  font-weight: 800;
  margin: 5px 0 0 0;
`;

export const ItemFollow = styled.div`
  margin: 5px 0 0 0;
  > .follwer_title {
    font-weight: 800;
  }
  > .product_follwer {
    text-align: end;
  }
`;

export const ItemSubTitle = styled.div``;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  > .discount {
    text-align: end;
    color: #452cdd;
    font-weight: 800;
  }
`;

export const ItemContainerB = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 1500px;

  margin: 20px;
  padding: 0 76px;
`;

export const ItemTitleB = styled.div`
  font-weight: 800;
  margin: 5px 0 0 0;
  letter-spacing: -1.3px;
`;

/* All : 모달 스타일 */
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
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

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExitBtn = styled.img.attrs({
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

export const ModalItemTitle = styled(ItemTitle)`
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
`;

export const ModalImg = styled.div`
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

export const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ModalBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

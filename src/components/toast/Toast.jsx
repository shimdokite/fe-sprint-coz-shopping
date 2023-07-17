import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import iconOn from "../../assets/iconOn.png";
import iconOff from "../../assets/iconOff.png";
import { useSelector } from "react-redux";

export const Toast = () => {
  const curToast = useSelector((state) => state.productsReducer.toast);
  const [toast, setToast] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(toast.slice(1, toast.length));
    }, 1800);

    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (curToast === null) return;
    else if (curToast.isBookmark) {
      setToast([
        ...toast,
        <ToastWrapper>
          <ToastCheckImg />
          <ToastDescription>북마크가 추가되었습니다.</ToastDescription>
        </ToastWrapper>,
      ]);
    } else {
      setToast([
        ...toast,
        <ToastWrapper>
          <ToastCheckImg2 />
          <ToastDescription>북마크가 삭제되었습니다.</ToastDescription>
        </ToastWrapper>,
      ]);
    }
  }, [curToast]);

  return (
    <>
      <ToastContainer>{toast}</ToastContainer>
    </>
  );
};

const show = keyframes`
    from {
        transform: translateX(100%);
    } to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const ToastContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;

  ${(props) =>
    props.isFading &&
    css`
      opacity: 0;
      transform: opacity 1.5s ease-in-out;
    `}
`;

const ToastWrapper = styled.div`
  animation: ${show} 1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 1px solid #0000001a;
  border-radius: 12px;

  margin: 10px;
  padding: 18px 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const ToastCheckImg = styled.img.attrs({
  src: `${iconOn}`,
})`
  /* cursor: pointer; */

  width: 18px;
  height: 18px;
`;

const ToastCheckImg2 = styled.img.attrs({
  src: `${iconOff}`,
})`
  /* cursor: pointer; */

  width: 18px;
  height: 18px;
`;

const ToastDescription = styled.div`
  font-weight: 700;
  /* text-align: center; */
`;

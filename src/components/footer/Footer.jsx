import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainter>
      <FooterUp>
        <div className="privacy">개인정보 처리방침</div>
        <div className="terms_use">이용 약관</div>
      </FooterUp>
      <FooterDown>All rights reserved @ Codestates</FooterDown>
    </FooterContainter>
  );
};

const FooterContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;

  border-top: 1px solid #0000001a;
  padding: 10px 0 15px 0;
`;

const FooterUp = styled.div`
  display: flex;
  color: #888888;

  > .privacy {
    border-right: 1.5px solid #888888;
    padding: 0 5px 0 0;
  }

  > .terms_use {
    margin: 0 0 0 5px;
  }
`;

const FooterDown = styled.div`
  color: #888888;
`;

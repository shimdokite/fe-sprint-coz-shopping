import { styled } from "styled-components";

export const MainContainer = styled.main`
  height: 700px;
`;

export const NonBookmark = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 700;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
`;

export const Typefilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* height: 500px; */
`;

export const TypeFilterImg = styled.img`
  cursor: pointer;
  width: 82px;
  height: 82px;
  border-radius: 50%;
`;

export const TypefilterTitle = styled.div`
  cursor: pointer;
  margin-top: 10px;
  color: ${(props) => (props.active ? "#412DD4" : "black")};
  font-weight: ${(props) => (props.active ? "700" : "none")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: ${(props) => (props.active ? "3px" : "0")};
    background-color: ${(props) => (props.active ? "#412DD4" : "transparent")};
  }
`;

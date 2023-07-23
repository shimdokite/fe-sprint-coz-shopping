import { styled } from "styled-components";
import iconOn from "../assets/iconOn.png";
import iconOff from "../assets/iconOff.png";

export const BookmarkContainter = styled.div``;

export const BookmarkOn = styled.img.attrs({
  src: `${iconOn}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

export const BookmarkOff = styled.img.attrs({
  src: `${iconOff}`,
})`
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

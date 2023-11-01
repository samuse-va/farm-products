import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  box-sizing: border-box;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  height: 60px;
  padding: 0 24px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 60px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }
`;

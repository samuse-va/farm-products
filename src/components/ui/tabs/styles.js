import styled from "styled-components";

export const TitleList = styled.div`
  display: inline-flex;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  margin-right: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
  background-color: ${(props) =>
    props.active ? props.theme.colorGreen : props.theme.colorLightGrey};
`;

export const Content = styled.div``;

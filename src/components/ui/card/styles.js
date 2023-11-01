import styled from "styled-components";

export const StyledCard = styled.section`
  width: 540px;
  height: 197px;
  padding: ${(props) => props.theme.indent};
  box-sizing: border-box;
  background-color: ${(props) =>
    props.good_product
      ? props.theme.colorLightGreen
      : props.theme.colorLightRed};
`;

export const StyledCardHead = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const StyledText = styled.div`
  margin-left: ${(props) => props.theme.indent};
`;

export const StyledCategory = styled.span`
  padding: 2px 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 4px;
  background-color: ${(props) =>
    props.good_product ? props.theme.colorGreen : props.theme.colorRed};
`;

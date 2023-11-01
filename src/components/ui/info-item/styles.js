import styled from "styled-components";

export const InfoLine = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;

  & span {
    font-weight: 700;
  }
`;

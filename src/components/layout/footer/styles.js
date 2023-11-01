import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 0 90px;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

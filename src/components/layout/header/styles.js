import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 0 90px;
  width: ${(props) => props.theme.pageWidth};
  height: 80px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

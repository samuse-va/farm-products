import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Ul } from "/src/components/styled";

export const Description = styled.div`
  margin-top: 16px;
`;

export const Price = styled.span`
  display: inline-block;
  margin-top: 14px;
  padding: 4px 8px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colorLightBlue};
`;

export const Card = styled.div`
  display: flex;
  /* width: 727px; */
  /* height: 288px; */
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Image = styled.img`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const CardInfo = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 21px;
  /* height: 248px; */
`;

export const CardTitle = styled(Title)`
  margin-bottom: 16px;
  line-height: 130%;
`;

export const StyledUl = styled(Ul)`
  margin-top: 20px;

  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

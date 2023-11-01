import styled from "styled-components";
import Section from "/src/components/styled/section";
import aboutImage from "/src/assets/about.svg";

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 24px;
  width: 538px;
`;

export const StyledSection = styled(Section)`
  padding: 183px 553px 183px 90px;
  background-color: ${(props) => props.theme.colorLightBlue};
`;

export const TextWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 637px;

  &::before {
    position: absolute;
    left: 654px;
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colorBlue};
    z-index: 1;
  }

  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 273px;
    height: 607px;
    left: 740px;
    top: -128px;
    margin: auto;
    z-index: 2;
    background: url(${aboutImage}) no-repeat;
  }
`;

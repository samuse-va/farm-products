import styled, { css } from "styled-components";
import Title from "/src/components/ui/title/title";
import on from "/src/assets/checkbox/on.svg";
import off from "/src/assets/checkbox/off.svg";

export const Form = styled.form``;

export const OrderWrapper = styled.div`
  width: 353px;
  padding: 24px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;
export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px 12px;
  background-color: #f6f6f6;

  &:placeholder {
    color: ${(props) => props.theme.colorBlackForText};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
  }
`;

export const StyledPrice = styled.span`
  display: inline-flex;
  color: ${(props) => props.theme.colorBlackForText};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  margin-top: 20px;
`;

export const Value = styled.input`
  display: block;
  border: none;
  margin-top: 8px;
  margin-bottom: 32px;
  width: auto;
  font-size: 24px;
  font-weight: bold;
`;

export const FilterWrapper = styled.div`
  width: 353px;
  padding: 24px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;

export const CheckboxTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  padding-top: 15px;
  padding-bottom: 14px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: contain;

    ${(props) =>
      props.$checked
        ? css`
            background-image: url(${on});
          `
        : css`
            background-image: url(${off});
          `}
  }
`;

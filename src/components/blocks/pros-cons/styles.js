import styled from "styled-components";
import { Section, Ul } from "/src/components/styled";

export const StyledSection = styled(Section)`
  padding: 100px 90px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const BlockWrapper = styled.div`
  display: flex;
  margin: 64px auto;
`;

export const StyledList = styled(Ul)`
  display: grid;
  gap: ${(props) => props.theme.indent};
  margin-right: ${(props) => (props.pros ? props.theme.indent : 0)};
`;

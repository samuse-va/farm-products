import React from "react";
import Logo from "/src/components/ui/logo/logo";
// import "./style.css";
import { StyledFooter } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <span>Создано 2023</span>
    </StyledFooter>
  );
}

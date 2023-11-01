import React from "react";
import Nav from "/src/components/layout/nav/nav";
import Logo from "/src/components/ui/logo/logo";
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

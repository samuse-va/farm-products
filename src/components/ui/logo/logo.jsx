import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, Text, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

export default function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

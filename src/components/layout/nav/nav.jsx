import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";
// import { Ul, Li } from "/src/components/styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

export default function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </nav>
    </nav>
  );
}

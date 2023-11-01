import React from "react";
import Button from "/src/components/ui/button/button";
import Card from "/src/components/ui/card/card";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, BlockWrapper, StyledList } from "./styles";
import { Li } from "/src/components/styled";
import { AppRoute } from "/src/const";

export default function ProsCons({ data_pros, data_cons, level }) {
  return (
    <StyledSection>
      <Title size={TitleSize.MEDIUM} level={level}>
        Почему фермерские продукты лучше?
      </Title>
      <BlockWrapper>
        <StyledList pros>
          {data_pros.map((p) => (
            <Li key={p.id}>
              <Card {...p} />
            </Li>
          ))}
        </StyledList>
        <StyledList>
          {data_cons.map((c) => (
            <Li key={c.id}>
              <Card {...c} />
            </Li>
          ))}
        </StyledList>
      </BlockWrapper>
      <Button minWidth={260} link={AppRoute.ORDER}>
        Купить
      </Button>
    </StyledSection>
  );
}

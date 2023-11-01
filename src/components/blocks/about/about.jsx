import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Paragraph, StyledSection, TextWrapper } from "./styles";

export default function About({ level }) {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={level}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Paragraph>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Paragraph>
      </TextWrapper>
    </StyledSection>
  );
}

import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
// import "./style.css";
import {
  StyledCard,
  StyledCardHead,
  StyledText,
  StyledCategory
} from "./styles";

export default function Card({ src, category, title, description }) {
  // const add_class =
  //   category === "Фермерские продукты" ? "card__good" : "card__bad";
  const good_product = category === "Фермерские продукты";
  return (
    // <section className={"card " + add_class}>
    <StyledCard good_product={good_product}>
      <StyledCardHead>
        <img width={56} height={56} src={src} alt={title} />
        <StyledText>
          <StyledCategory good_product={good_product}>
            {category}
          </StyledCategory>
          <Title size={TitleSize.XSMALL} level={TitleLevel.H3}>
            {title}
          </Title>
        </StyledText>
      </StyledCardHead>
      <p>{description}</p>
    </StyledCard>
  );
}

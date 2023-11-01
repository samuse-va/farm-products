import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  Description,
  Price,
  Card,
  Image,
  CardInfo,
  CardTitle,
  StyledUl
} from "./styles";
import Tabs from "../tabs/tabs";
import { Li } from "/src/components/styled";
import InfoItem, { characteristics, features } from "../info-item/info-item";

function CatalogItem({ item }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <>
          <Description>{item.description}</Description>
          <Price>{item.price} руб. / 700 гр.</Price>
        </>
      )
    },
    {
      title: "Характеристики",
      content: (
        <StyledUl>
          {characteristics &&
            characteristics.map((char, i) => (
              <Li key={char + i}>
                <InfoItem char={char} info={item[char.type]} />
              </Li>
            ))}
        </StyledUl>
      )
    },
    {
      title: "Свойства",
      content: (
        <StyledUl>
          {features &&
            features.map((feature, i) => (
              <Li key={feature + i}>
                <InfoItem char={feature} info={item[feature.type]} />
              </Li>
            ))}
        </StyledUl>
      )
    }
  ];
  return (
    <Card>
      <Image src={item.src} alt={item.name} width={248} height={248} />
      <CardInfo>
        <CardTitle size={TitleSize.SMALL} level={TitleLevel.H4}>
          {item.name}
        </CardTitle>
        <Tabs tabs={tabs} />
      </CardInfo>
    </Card>
  );
}

export default CatalogItem;

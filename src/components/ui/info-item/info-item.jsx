import React from "react";
import { InfoLine } from "./styles";

export const characteristics = [
  { type: "weight", name: "Масса: " },
  { type: "best_before", name: "Срок годности: " },
  { type: "breed", name: "Порода: " },
  { type: "origin", name: "Место происхождения: " }
];
export const features = [
  { type: "energy", name: "Энергетическая ценность: " },
  { type: "nutrition", name: "Пищевая ценность: " }
];

function InfoItem({ char, info }) {
  return (
    <InfoLine>
      <span>{char.name}</span>
      {info}.
    </InfoLine>
  );
}

export default InfoItem;

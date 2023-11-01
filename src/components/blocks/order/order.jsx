import React, { useState } from "react";
import {
  Form,
  OrderWrapper,
  StyledTitle,
  Input,
  StyledPrice,
  Value,
  FilterWrapper,
  CheckboxTitle
} from "./styles";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
// import Filter from "../../blocks/filter/filter";
import { Ul, Li } from "/src/components/styled";
// import Checkbox from "../../ui/checkbox/checkbox";
import { Label } from "./styles";
import VisuallyHiddenInput from "../../styled/visually-hidden-input/visually-hidden-input";

export default function Order({ options }) {
  const [address, setAddress] = useState("");
  const [sum, setSum] = useState(0);
  const [checked, setChecked] = useState([]);

  const onChange = (evt, setChange) => {
    setChange(evt.target.value);
  };

  const handleChange = (event, option) => {
    let updatedList = [...checked];
    if (event.currentTarget.checked) {
      updatedList = [...updatedList, option];
      setSum(sum + option.price);
    } else {
      updatedList.splice(updatedList.indexOf(option), 1);
      setSum(sum - option.price);
    }
    setChecked(updatedList);
  };

  const isButtonEnable = address && sum;

  return (
    <Form>
      <FilterWrapper>
        <CheckboxTitle size={TitleSize.XSMALL} level={TitleLevel.H3}>
          Выберите продукты
        </CheckboxTitle>
        <Ul>
          {options.map((option) => (
            <Li key={option.id}>
              <Label $checked={checked.includes(option)}>
                <VisuallyHiddenInput
                  type="checkbox"
                  onChange={(evt) => {
                    handleChange(evt, option);
                  }}
                />
                {option.name}
              </Label>

              {/* <Checkbox
                checked={isChecked}
                label={option.name}
                onChange={(evt) => {
                  setIsChecked(!isChecked);
                  isChecked
                    ? setSum(sum + option.price)
                    : setSum(sum - option.price);
                }}
              /> */}
            </Li>
          ))}
        </Ul>
      </FilterWrapper>
      <OrderWrapper>
        <StyledTitle size={TitleSize.XSMALL} level={TitleLevel.H3}>
          Сделать заказ
        </StyledTitle>
        {/* <Form> */}
        <Input
          name="address"
          value={address}
          onChange={(e) => onChange(e, setAddress)}
          placeholder="Введите адрес доставки"
        />
        <StyledPrice>Цена</StyledPrice>
        <Value value={sum} readOnly />

        <Button
          minWidth={314}
          disabled={!isButtonEnable}
          onClick={(evt) => {
            evt.preventDefault();
            alert(
              `Спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
            );
          }}
        >
          Купить
        </Button>
        {/* </Form> */}
      </OrderWrapper>
    </Form>
  );
}

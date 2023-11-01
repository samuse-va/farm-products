import React, { useState } from "react";
import {
  Page,
  Form,
  OrderWrapper,
  StyledTitle,
  Input,
  StyledPrice,
  Value,
  FilterWrapper,
  CheckboxTitle,
  StyledSwiper,
  CheckboxLabel
} from "./styles";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import CheckboxList from "../../blocks/checkbox-list/checkbox-list";
import CatalogItem from "../../ui/catalog-item/catalog-item";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function OrderPage({ products }) {
  const [address, setAddress] = useState("");
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const onChange = (evt, setChange) => {
    setChange(evt.target.value);
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const isButtonEnable = selectProductIds.length && address;

  return products && products.length ? (
    <Page>
      <Form>
        <FilterWrapper>
          <CheckboxTitle size={TitleSize.XSMALL} level={TitleLevel.H3}>
            Выберите продукты
          </CheckboxTitle>
          <CheckboxList
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            labelComponent={CheckboxLabel}
            onChange={setSelectProductIds}
            selectValues={selectProductIds}
            name={"select-products"}
            onClickLabel={handleOnClickProduct}
          />
        </FilterWrapper>
        <OrderWrapper>
          <StyledTitle size={TitleSize.XSMALL} level={TitleLevel.H3}>
            Сделать заказ
          </StyledTitle>
          <Input
            name="address"
            value={address}
            onChange={(e) => onChange(e, setAddress)}
            placeholder="Введите адрес доставки"
          />
          <StyledPrice>Цена</StyledPrice>
          <Value value={fullPrice + " руб."} readOnly />

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
        </OrderWrapper>
      </Form>

      <StyledSwiper
        onSwiper={setSwiperRef}
        direction="vertical"
        spaceBetween={12}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CatalogItem item={product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Page>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

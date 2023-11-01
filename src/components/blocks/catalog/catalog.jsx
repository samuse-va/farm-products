import React from "react";
import CatalogItem from "../../ui/catalog-item/catalog-item";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { StyledSwiper } from "./styles";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

SwiperCore.use([Navigation, Thumbs]);

function Catalog({ items, thumbsSwiperIndex }) {
  // const [thumbsSwiper, setThumbsSwiper] = useState(thumbsSwiperIndex);

  return items?.length ? (
    <StyledSwiper
      direction="vertical"
      spaceBetween={60}
      slidesPerView={3}
      freeMode
      watchSlidesProgress
      // thumbs={{
      //   swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
      // }}
    >
      {items &&
        items.length &&
        items.map((item) => (
          <SwiperSlide key={item.id}>
            <CatalogItem item={item} />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  ) : null;
}

export default Catalog;

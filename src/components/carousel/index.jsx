import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  CarouselLeftButton,
  CarouselRightButton,
  CarouselWrapper,
} from "./styles";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";

const responsive = {
  0: { items: 1 },
  1024: { items: 2 },
};

const Carousel = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <CarouselWrapper>
      <AliceCarousel
        disableButtonsControls
        activeIndex={activeIndex}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
      <CarouselLeftButton
        onClick={() => setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1))}
      >
        <LeftArrow />
      </CarouselLeftButton>

      <CarouselRightButton
        onClick={() =>
          setActiveIndex((prev) =>
            prev < items.length - 1 ? prev + 1 : items.length - 1
          )
        }
      >
        <RightArrow />
      </CarouselRightButton>
    </CarouselWrapper>
  );
};

export default Carousel;

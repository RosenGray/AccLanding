import React, { FC, useEffect, useState } from "react";
import { items } from "./config";
import { useRouter } from "next/router";
import { CarouselWrapper, CarItem, CarDots, CarDot } from "./Carousel.styled";

const INTERVAL = 2000;

interface CarouselProps {}

const Carousel: FC<CarouselProps> = () => {
  const router = useRouter();
  const locale = router.locale ?? "en";
  const itemsLength = items[locale].length - 1;

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === itemsLength ? 0 : current + 1);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [current, itemsLength]);

  const renderCarItems = () => {
    return items[locale].map((item, index, originalItems) => {
      const { image } = item;

      return (
        <CarItem
          style={{ zIndex: originalItems.length - index }}
          $isActive={index === current}
          $src={image}
          key={image}
        />
      );
    });
  };

  const renderCarDots = () => {
    return items[locale].map((_item, index) => {
      return (
        <CarDot
          $isActive={index === current}
          key={index}
          onClick={() => setCurrent(index)}
        />
      );
    });
  };

  return (
    <CarouselWrapper>
      {renderCarItems()}
      <CarDots>{renderCarDots()}</CarDots>
    </CarouselWrapper>
  );
};

export default Carousel;

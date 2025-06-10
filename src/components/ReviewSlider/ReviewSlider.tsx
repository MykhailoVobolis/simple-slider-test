import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonialsData";
import { useMedia } from "react-use";

import ReviewList from "../ReviewList/ReviewList";
import SliderButton from "../SliderButton/SliderButton";
import SliderPagination from "../SliderPagination/SliderPagination";

import css from "./ReviewSlider.module.css";

export default function ReviewSlider() {
  const [cards, setCards] = useState(testimonials);
  const [visibleCount, setVisibleCount] = useState(1);

  const isTablet = useMedia("(min-width: 768px)");
  const isDesktop = useMedia("(min-width: 1440px)");

  useEffect(() => {
    if (isDesktop) {
      setVisibleCount(3);
    } else if (isTablet) {
      setVisibleCount(2);
    } else {
      setVisibleCount(1);
    }
  }, [isTablet, isDesktop]);

  const visibleCards = cards.slice(0, visibleCount);
  const currentIndex = testimonials.indexOf(cards[0]);

  const handleNext = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className={css.sliderWrapper}>
      <div className={css.sliderContainer}>
        {isDesktop && <SliderButton direction="prev" handleClick={handlePrev} />}
        <ReviewList testimonials={visibleCards} />
        {isDesktop && <SliderButton direction="next" handleClick={handleNext} />}
      </div>
      <SliderPagination testimonials={testimonials} currentIndex={currentIndex} />
      {!isDesktop && (
        <div className={css.btnBar}>
          <SliderButton direction="prev" handleClick={handlePrev} />
          <SliderButton direction="next" handleClick={handleNext} />
        </div>
      )}
    </div>
  );
}

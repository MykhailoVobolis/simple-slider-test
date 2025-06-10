import { useState } from "react";
import { testimonials } from "../../data/testimonialsData";

import ReviewList from "../ReviewList/ReviewList";
import SliderButton from "../SliderButton/SliderButton";
import SliderPagination from "../SliderPagination/SliderPagination";

import css from "./ReviewSlider.module.css";

export default function ReviewSlider() {
  const [cards, setCards] = useState(testimonials);

  const handleNext = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const currentIndex = testimonials.indexOf(cards[0]);

  return (
    <div className={css.sliderWrapper}>
      <div className={css.sliderContainer}>
        <SliderButton direction="prev" handleClick={handlePrev} />
        <ReviewList testimonials={cards} />
        <SliderButton direction="next" handleClick={handleNext} />
      </div>

      <SliderPagination testimonials={testimonials} currentIndex={currentIndex} />
    </div>
  );
}

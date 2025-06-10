import { SliderPaginationProps } from "../../types/testimonial";

import SlideIndicator from "../SlideIndicator/SlideIndicator";

import css from "./SliderPagination.module.css";

export default function SliderPagination({ testimonials, currentIndex }: SliderPaginationProps) {
  return (
    <ul className={css.paginationContainer}>
      {testimonials.map((testimonial, index) => (
        <SlideIndicator key={testimonial.id} isActive={index === currentIndex} />
      ))}
    </ul>
  );
}

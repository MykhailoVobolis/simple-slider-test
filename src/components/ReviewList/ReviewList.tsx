import { ReviewListProps } from "../../types/testimonial";

import ReviewCard from "../ReviewCard/ReviewCard";

import css from "./ReviewList.module.css";

export default function ReviewList({ testimonials }: ReviewListProps) {
  return (
    <ul className={css.reviewList}>
      {testimonials.map((testimonial) => (
        <ReviewCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </ul>
  );
}

import { ReviewCardProps } from "../../types/testimonial";
import { BiSolidQuoteRight } from "react-icons/bi";

import css from "./ReviewCard.module.css";

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  const {
    company,
    text,
    author: { photo, name, position },
  } = testimonial;

  return (
    <li className={css.cardWrapper}>
      <div>
        <img className={css.companyLogo} src={company} alt="Company logo" />
        <p className={css.textReview}>{text}</p>
        <BiSolidQuoteRight size={24} className={css.quoteIcon} />
      </div>
      <div className={css.authorContainer}>
        <img className={css.authorPhoto} src={photo} alt={`${name} photo`} />
        <div>
          <p className={css.authorName}>{name}</p>
          <p className={css.authorPosition}>{position}</p>
        </div>
      </div>
    </li>
  );
}

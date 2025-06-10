import { SlideIndicatorProps } from "../../types/testimonial";

import css from "./SlideIndicator.module.css";

export default function SlideIndicator({ isActive }: SlideIndicatorProps) {
  return <li className={`${css.indikator} ${isActive ? css.active : ""}`}></li>;
}

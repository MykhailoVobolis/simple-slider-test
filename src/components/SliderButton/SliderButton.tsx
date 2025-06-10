import { SliderButtonProps } from "../../types/testimonial";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import css from "./SliderButton.module.css";

export default function SliderButton({ direction, handleClick }: SliderButtonProps) {
  return (
    <button className={css.sliderBtn} onClick={handleClick}>
      {direction === "prev" ? <MdOutlineArrowBackIos size={32} /> : <MdOutlineArrowForwardIos size={32} />}
    </button>
  );
}

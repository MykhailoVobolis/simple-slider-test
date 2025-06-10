import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";

import css from "./TestimonialsPage.module.css";

export default function TestimonialsPage() {
  return (
    <section className={css.testimonialSection}>
      <div className={css.container}>
        <h1 className={css.title}>Voices of Success with Sales Fortuna</h1>
        <ReviewSlider />
      </div>
    </section>
  );
}

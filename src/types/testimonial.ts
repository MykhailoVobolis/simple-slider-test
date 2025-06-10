export interface Testimonial {
  company: string;
  text: string;
  author: {
    photo: string;
    name: string;
    position: string;
  };
}

export interface ReviewListProps {
  testimonials: Testimonial[];
}

export interface ReviewCardProps {
  testimonial: Testimonial;
}

export interface SliderButtonProps {
  direction: "prev" | "next";
  handleClick(): void;
}

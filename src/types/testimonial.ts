export interface Testimonial {
  company: string;
  text: string;
  author: {
    photo: string;
    name: string;
    position: string;
  };
}

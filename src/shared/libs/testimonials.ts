/**
 * Description must me not more than near than 14 words.
 * Swiper doesn't allow to set overflow to description container.
 */

export type TestimonialType = {
  id: number;
  imageName: string;
  desription: string;
  date: string;
  name: string;
  positionHead: string;
};

export const testimonialsList: TestimonialType[] = [
  {
    id: 1,
    imageName: "client-test.jpg",
    desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "March 1.2021",
    name: "First TestName",
    positionHead: "Not Director",
  },
  {
    id: 2,
    imageName: "client-test.jpg",
    desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "March 2.2022",
    name: "Second TestName",
    positionHead: "Almost Director",
  },
  {
    id: 3,
    imageName: "client-test.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus dolores dolorum  dignissimos, perferendis?",
    date: "March 3.2023",
    name: "Third TestName",
    positionHead: "Director",
  },
];

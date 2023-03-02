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
    imageName: "client-1.jpg",
    desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "March 27.2020",
    name: "Jane1",
    positionHead: "Director",
  },
  {
    id: 2,
    imageName: "client-2.jpg",
    desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "March 27.2021",
    name: "Peter2",
    positionHead: "Not Director",
  },
  {
    id: 3,
    imageName: "client-3.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus dolores dolorum  dignissimos, perferendis?",
    date: "March 27.2022",
    name: "Anne3",
    positionHead: "Almost Director",
  },
  {
    id: 4,
    imageName: "client-3.jpg",
    desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "March 27.2022",
    name: "Margo4",
    positionHead: "Almost Director",
  },
];

export type projectType = {
  id: number;
  shortName: string;
  imageName: string;
  longName: string;
  description: string;
  date: string;
  technologies: string;
  role: string;
  link: string;
};

export const projects: projectType[] = [
  {
    id: 1,
    shortName: "First ShortName",
    imageName: "coming.jpg",
    longName: "Very very long name",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias. ",
    date: "4dec 2020",
    role: "frontend",
    link: "https://www.youtube.com/",
    technologies:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio!",
  },
  {
    id: 2,
    shortName: "Second ShortName",
    imageName: "coming.jpg",
    longName: "Very very long name",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias. ",
    date: "4dec 2020",
    role: "frontend",
    link: "https://www.youtube.com/",
    technologies:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio!",
  },
  {
    id: 3,
    shortName: "Third ShortName",
    imageName: "coming.jpg",
    longName: "Very very long name",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias. ",
    date: "4dec 2020",
    role: "frontend",
    link: "https://www.youtube.com/",
    technologies:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio!",
  },
];

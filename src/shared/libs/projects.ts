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
  github: string;
};

export const projects: projectType[] = [
  {
    id: 1,
    shortName: "Simple Ecommerce",
    imageName: "01-simple-ecommerce.jpg",
    longName: "Ramen shop ecommerce project",
    description:
      "Ecommerce project with basic functionality. Was made as a training project in one of the courses and rewritten manually with additional functionality. You can find more info in readme file on GitHub.",
    date: "03.2023",
    role: "frontend",
    link: "https://andbabenko-simple-ecommerce.vercel.app/",
    github: "https://github.com/and-babenko/simple-ecommerce",
    technologies:
      "SCSS, TypeScript, Axios, React, Redux Toolkit, React Router v.6",
  },
  {
    id: 2,
    shortName: "Who Wants to Be a Millionaire",
    imageName: "02-millionaire.jpg",
    longName: "Very very long name",
    description:
      "A small project made to try a different approach to development, to use the most popular config for eslint - Airbnb, as well as to turn buttons with clip-path: polygon and to try the layout without preprocessors. You can find more info in readme file on GitHub.",
    date: "03.2023",
    role: "frontend",
    link: "https://andbabenko-milloinaire-game.vercel.app",
    github: "https://github.com/and-babenko/milloinaire-game",
    technologies: "TypeScript, React, Redux Toolkit, React Router",
  },
];

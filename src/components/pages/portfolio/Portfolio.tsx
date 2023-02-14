import React, { useState } from "react";

import PortfolioCard from "../../ui/PortfolioCard";

const categories = ["All", "Web", "App", "Design"];
const projects = [
  {
    id: 1,
    shortName: "Web Design",
    longName: " Special Service for designers",
    category: "Web",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    shortName: "App Design",
    longName: " Mobile Landing App Design",
    category: "App",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    shortName: "Brand Design",
    longName: " Logo design for web and mobile app",
    category: "Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "https://www.youtube.com/",
  },
  {
    id: 4,
    shortName: "App Design",
    longName: " Mobile Landing App Design",
    category: "Web",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "www.link.com",
  },
  {
    id: 5,
    shortName: "App Design",
    longName: " Mobile Landing App Design",
    category: "App",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "www.link.com",
  },
  {
    id: 6,
    shortName: "App Design",
    longName: " Mobile Landing App Design",
    category: "App",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,optio! Cum ullam quos veritatis porro placeat corporis quaeratpossimus molestias.",
    date: "4dec 2020",
    technologies: "HTML and SCSS",
    role: "frontend",
    link: "www.link.com",
  },
];
const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const projectsWithFilters = projects.map((project) =>
    currentCategory === "All" ? (
      <PortfolioCard key={project.id} {...project} />
    ) : currentCategory === project.category ? (
      <PortfolioCard key={project.id} {...project} />
    ) : (
      ""
    )
  );

  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title" data-heading="Recent Works">
          My Portfolio
        </h2>

        <div className="portfolio__filters">
          {categories.map((item) => (
            <span
              className={`portfolio__item ${
                currentCategory === item ? "active" : ""
              }`}
              key={item}
              onClick={() => setCurrentCategory(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="portfolio__container container">
          {projectsWithFilters}
        </div>
      </section>
    </>
  );
};

export default Portfolio;

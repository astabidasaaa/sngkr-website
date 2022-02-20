import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const projects_data = [
  {
    title: "Bohok's Blog",
    tech: ["GatsbyJS", "Styled Component", "Netlify CMS"],
    link: "https://bohok.netlify.app/",
  },
  {
    title: "Rakan.tip",
    tech: ["ReactJS", "SASS", "Slick Carousel"],
    link: "https://rakantip.netlify.app/",
  },
  {
    title: "Space Tourism Website - Frontend Mentor",
    tech: ["GatsbyJS", "Styled Component", "TailwindCSS", "Framer Motion"],
    link: "https://sngkr-space-tourism.netlify.app/",
  },
  {
    title: "Time Tracking Dashboard - Frontend Mentor",
    tech: ["GatsbyJS", "Styled Component"],
    link: "https://sngkr-time-tracking-dashboard.netlify.app/",
  },
  {
    title: "URL Shortening API - Frontend Mentor",
    tech: ["HTML", "SCSS"],
    link: "https://astabidasaaa.github.io/url-shortening-api-master/",
  },
];

const MyProjectsStyle = styled(motion.ul)`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  list-style-type: none;
  margin: 2rem 0;
  padding: 0;

  .project-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;
      padding: 2rem;
      border: 1px solid var(--white);
      border-radius: 1rem;
      text-decoration: none;
      transition: transform 0.1s ease-in-out;

      h5 {
        margin: 0;
      }

      .tech-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem 0.8rem;

        p.tech {
          margin: 0;
          padding: 0.3rem 1rem;
          background: var(--white);
          color: var(--black);
          border-radius: 2rem;
        }
      }

      &:hover {
        transform: scale(1.05);
        background: var(--white);
        transition: transform 0.1s ease-in-out;

        h5 {
          color: var(--black);
        }

        p.tech {
          background: var(--black);
          color: var(--white);
        }
      }
    }
  }
`;

const MyProjects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MyProjectsStyle variants={container} initial="hidden" animate="visible">
      {projects_data.map((item, index) => {
        return (
          <motion.li
            variants={itemVariants}
            className="project-container"
            key={`my-project-${index}`}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h5>{item.title}</h5>
              <div className="tech-container">
                {item.tech.map((item) => {
                  return (
                    <p className="tech subPara" key={`tech-${item}`}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </a>
          </motion.li>
        );
      })}
    </MyProjectsStyle>
  );
};

const AboutPage = () => {
  return (
    <article>
      <h1>About Me</h1>
      <p>
        Hi, i'm Sangkara Nararya Astabidasa. I am a new kid in the website
        development realm. I just started to learn HTML and Javascript in Q3
        2020.
      </p>
      <p>Lets build new things together.</p>
      <br />
      <h3>My projects:</h3>
      <MyProjects />
    </article>
  );
};

export default AboutPage;

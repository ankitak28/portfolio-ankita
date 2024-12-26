import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { imageSrc, title, description, demo, source, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          <li key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

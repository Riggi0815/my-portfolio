import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, role, imageSrc, description, skills, demo, source },
}) => {
  const isGif = imageSrc.toLowerCase().endsWith(".gif");

  return (
    <div className={styles.container}>
      {isGif ? (
        <img
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`GIF of ${title}`}
          loop // Dies lässt das GIF endlos abspielen
        />
      ) : (
        <img
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* Conditionally render the Demo link */}
        {demo && (
          <a className={styles.link} href={demo}>
            Demo
          </a>
        )}
        {/* Conditionally render the Source link */}
        {source && (
          <a className={styles.link} href={source}>
            Source
          </a>
        )}
      </div>
    </div>
  );
};

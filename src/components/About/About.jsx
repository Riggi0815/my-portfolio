import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me while writing Errors :)"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/FrontendDevelopment.png")}
              alt="UI Icon"
            />
            <div className={styles.aboutItemText}>
              <h>Frontend Developer</h>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimzed sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/GameDevelopment.png")}
              alt="Controller Icon"
            />
            <div className={styles.aboutItemText}>
              <h>Game Developer</h>
              <p>
                I have experience developing Games in different Engines and
                Languages.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/GameDevelopment.png")}
              alt="Controller Icon"
            />
            <div className={styles.aboutItemText}>
              <h>3D Artist</h>
              <p>
                I have a little bit of Experience with 3D Modeling in Blender.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

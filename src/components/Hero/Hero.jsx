import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rick</h1>
        <p className={styles.description}>
          I'm a Developer with 3 Years of Experience in React, NodeJS and Unity.
          Reach out if you'd like to learn more!
        </p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:riggi0815@outlook.de" className={styles.Btn}>
              Contact Me
            </a>
          </li>
          <li className={styles.link}>
            <a href="" className={styles.Btn}>
              Resumé
            </a>
          </li>
        </ul>
      </div>
      <img
        src={getImageUrl("hero/Ich.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

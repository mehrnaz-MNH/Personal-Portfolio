import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mehrnaz</h1>
        <p className={styles.description}>
          I'm a Computer Science Student interested in Web and App
          Development.Reach out if you like to learn more
        </p>
        <a href="mailto:mnh.mehrnaz@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageURL("hero/heroImage.png")} className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

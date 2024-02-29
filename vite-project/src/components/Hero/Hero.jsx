import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I'm Mehrnaz</h1>
        <p>
          I'm a Computer Science Student interested in Web and App
          Development.Reach out if you like to learn more
        </p>
        <a href="mailto:mnh.mehrnaz@gmail.com">Contact Me</a>
      </div>
      <img src={getImageURL("hero/heroImage.png")} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

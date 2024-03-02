import React from "react";
import { getImageURL } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          className={styles.aboutImg}
        />
        <ul className={styles.aboutList}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
                I have experience in working with and developing web
                applications, demonstrating proficiency in various web
                development technologies, frameworks, and programming languages.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>System Administration</h3>
              <p>
                I have hands-on experience in system administration and IT
                operations, including managing servers, networks, and
                infrastructure components to ensure optimal performance,
                reliability, and security.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

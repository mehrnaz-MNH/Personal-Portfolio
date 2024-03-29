import React from "react";

import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:myemail@email.com">mnh.mehrnaz@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/mehrnaz-mnh/?_l=en_US">
              linkedin.com/mehrnaz-mnh
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageURL("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/mehrnaz-MNH">github.com/mehrnaz-MNH</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

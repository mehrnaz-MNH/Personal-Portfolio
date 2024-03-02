import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageURL } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          alt="menu btn"
          onClick={() => setmenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setmenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

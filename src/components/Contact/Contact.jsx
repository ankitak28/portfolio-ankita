import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:ankitak28@gmail.com">ankitak28@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
          />
          <a href="https://www.linkedin.com/in/ankita-kumari/">
            linkedin.com/in/ankita-kumari/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/ankitak28/">github.com/ankitak28/</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

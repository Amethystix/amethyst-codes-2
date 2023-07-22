import * as React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.madeWith}>
          <span>Made with </span>
          <div className={styles.next} /> <div className={styles.react} />
          <span> and most importantly </span>
          <div className={styles.heart} />
        </div>
        <div>All sprites made by me. &copy;{new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Footer;

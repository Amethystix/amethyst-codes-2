import * as React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.title}>
        &#123; ...
        <div className={styles.logo} /> &#125;
        <div className={styles.headline}>amethyst.codes</div>
      </div>
      <div className={styles.navbar}></div>
    </>
  );
};

export default Header;

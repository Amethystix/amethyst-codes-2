import * as React from "react";
import styles from "./styles.module.scss";

const Mine: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.barrier} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Mine;

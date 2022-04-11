import * as React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

const DirtLayer: React.FC = () => {
  const items = ["About", "Education", "Work Experience", "Projects", "Links"];
  return (
    <div className={styles.dirt}>
      <div className={styles.dirtContainer}>
        <div className={cx(styles.dirtText, styles.index)}>Mine for gems!</div>
        {/* <div className={cx(styles.dirtText, styles.index)}>
        Jump to:
      </div>
      <div className={styles.indexItems}>
        {items.map(item => 
          <div className={styles.dirtText} key={item}>
            {item}
          </div>)
        }
      </div> */}
      </div>
    </div>
  );
};

export default DirtLayer;

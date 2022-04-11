import * as React from "react";
import Flower from "../Flower";
import FlowerField from "../FlowerField";
import Cloud from "../Cloud";
import styles from "./styles.module.scss";

const Surface = () => {
  return (
    <div className={styles.sky}>
      <div className={styles.cloudContainer}>
        {Array(15)
          .fill(0)
          .map(() => (
            <Cloud
              coordinates={{
                x: Math.random() * 125 - 66,
                y: Math.random() * 30 - 15,
              }}
            />
          ))}
      </div>
      <FlowerField />
      <div className={styles.grass} />
      <div className={styles.crust} />
    </div>
  );
};

export default Surface;

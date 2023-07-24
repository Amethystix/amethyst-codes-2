import * as React from "react";
import FlowerField from "../FlowerField";
import Cloud from "../Cloud";
import styles from "./styles.module.scss";
import Squirrel from "../Squirrel";

const Surface = () => {
  return (
    <div className={styles.sky}>
      <div className={styles.cloudContainer}>
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <Cloud
              key={i.toString()}
              coordinates={{
                x: Math.random() * 125 - 66,
                y: Math.random() * 30 - 15,
              }}
            />
          ))}
      </div>
      <Squirrel/>
      <FlowerField />
      <div className={styles.grass} />
      <div className={styles.crust} />
    </div>
  );
};

export default Surface;

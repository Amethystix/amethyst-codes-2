import * as React from "react";
import useFlowerGenerator from "../../effects/useFlowerGenerator";
import Flower from "../Flower";
import styles from "./styles.module.scss";

const FlowerField: React.FC = () => {
  const flowerField = React.useRef<HTMLDivElement>(null);
  const flowers = useFlowerGenerator(flowerField);

  return (
    <div className={styles.flowerField} ref={flowerField}>
      {flowers.map((flower, index) => (
        <Flower
          {...flower}
          key={`${flower.type}-${flower.coordinates.x}-${flower.coordinates.y}-${index}`}
        />
      ))}
    </div>
  );
};

export default FlowerField;

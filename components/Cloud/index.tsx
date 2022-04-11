import * as React from "react";
import usePosition from "../../effects/usePosition";
import { LocationCoordinates } from "../../types/positioning";
import styles from "./styles.module.scss";

type Props = {
  coordinates: LocationCoordinates;
};

const Cloud: React.FC<Props> = ({ coordinates }) => {
  const cloudElement = React.useRef(null);
  usePosition(cloudElement, coordinates);

  return (
    <div className={styles.cloudContainer}>
      <div className={styles.cloud} ref={cloudElement} />
    </div>
  );
};

export default Cloud;

import * as React from "react";
import styles from "./styles.module.scss";
import { LocationCoordinates } from "../../types/positioning";
import cx from "classnames";
import usePosition from "../../effects/usePosition";

export type FlowerProps = {
  type: FlowerType;
  coordinates: LocationCoordinates;
};

export enum FlowerType {
  Sunflower = "sunflower",
  YellowTulip = "yellowTulip",
  PinkTulip = "pinkTulip",
  Daisy = "daisy",
}

const Flower: React.FC<FlowerProps> = ({ type, coordinates }) => {
  const flowerElement = React.useRef<HTMLDivElement>(null);
  usePosition(flowerElement, coordinates);

  return (
    <div className={cx(styles[type], styles.flower)} ref={flowerElement} />
  );
};

export default Flower;

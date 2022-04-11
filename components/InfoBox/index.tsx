import * as React from "react";
import { GemStones } from "../../types/gems";
import styles from "./styles.module.scss";
import cx from "classnames";

type Props = {
  children: React.ReactNode;
  title: string;
  gem: GemStones;
  img?: React.ReactNode;
  direction?: "right" | "left";
};

const InfoBox: React.FC<Props> = ({ children, title, gem, img, direction }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [numHits, setHits] = React.useState(0);

  React.useEffect(() => {
    if (numHits >= 3 && !isOpen) {
      setOpen(true);
    }
  }, [numHits]);

  return (
    <>
      {!isOpen && (
        <div
          className={cx(
            direction ? styles[direction] : undefined,
            styles.clickGem,
            styles[`${gem}${numHits > 0 ? `-${numHits}` : ""}`]
          )}
          onClick={() => setHits(numHits + 1)}
        />
      )}
      <div className={cx(styles.infoBox, isOpen ? styles.show : styles.hide)}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.boxContent}>
          {children}
          {img && <div className={styles.imageContainer}>{img}</div>}
        </div>
      </div>
    </>
  );
};

export default InfoBox;

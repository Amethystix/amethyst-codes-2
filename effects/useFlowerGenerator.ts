import * as React from "react";
import { FlowerProps, FlowerType } from "../components/Flower";
import { LocationCoordinates } from "../types/positioning";

const useFlowerGenerator = (
  flowerFieldRef: React.RefObject<HTMLDivElement>
) => {
  const [flowers, setFlowers] = React.useState<FlowerProps[]>([]);
  const [fieldWidth, setFieldWidth] = React.useState(0);

  const fillFlowerField = () => {
    const numOfFlowers = fieldWidth / 100 - 1;
    const flowerDifference = numOfFlowers - flowers.length;
    const flowerCopy = [...flowers];
    if (flowerDifference > 0) {
      // push flowers to list
      for (let i = 0; i < flowerDifference; i++) {
        flowerCopy.push({
          type: pickFlower(),
          coordinates: randomCoordinates(),
        });
      }
    } else if (flowerDifference < 0) {
      // remove flowers from list
      for (let i = flowerCopy.length; i > numOfFlowers; i--) {
        flowerCopy.splice(i);
      }
    }
    setFlowers([...flowerCopy]);
  };

  const eventListenerCallback = (e: UIEvent) => {
    setFieldWidth(
      flowerFieldRef.current ? flowerFieldRef.current.offsetWidth : fieldWidth
    );
  };

  React.useEffect(() => {
    if (flowerFieldRef.current) {
      setFieldWidth(flowerFieldRef.current.offsetWidth);
      window.addEventListener("resize", eventListenerCallback);
      fillFlowerField();
    }
    return () => window.removeEventListener("resize", eventListenerCallback);
  }, [fieldWidth, flowerFieldRef]);

  return flowers;
};

const pickFlower = (): FlowerType => {
  const flowers = [
    FlowerType.PinkTulip,
    FlowerType.Sunflower,
    FlowerType.YellowTulip,
    FlowerType.Daisy,
  ];
  const randomNum = Math.floor(Math.random() * flowers.length);
  return flowers[randomNum];
};

const randomCoordinates = (): LocationCoordinates => {
  return {
    x: Math.ceil(Math.random() * 20 - 10),
    y: Math.ceil(Math.random() * 15),
  };
};

export default useFlowerGenerator;

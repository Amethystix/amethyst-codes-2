import * as React from "react";
import { LocationCoordinates } from "../types/positioning";

const usePosition = (
  componentRef: React.RefObject<HTMLDivElement>,
  coordinates: LocationCoordinates
) => {
  React.useEffect(() => {
    if (componentRef.current !== null) {
      componentRef.current.style.left = `${coordinates.x}px`;
      componentRef.current.style.top = `${coordinates.y}px`;
    }
  }, [componentRef]);
};

export default usePosition;

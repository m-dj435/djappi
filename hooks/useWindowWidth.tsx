import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (!window) {
      return;
    }
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return <div>{width}</div>;
};

export default useWindowWidth;

import "./Animation.css";
import { useEffect } from "react";
import celebration from "Data/Img/Animation/celebration.json";
import lottie from "lottie-web";

export const AnimateCelebration = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#celebration"),
      animationData: celebration,
    });
    return () => {
      // to unmount useEffect
    };
  }, []);

  return (
    <div className="celebration-animation">
      <div id="celebration" />
    </div>
  );
};

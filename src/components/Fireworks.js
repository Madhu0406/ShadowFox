import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Fireworks = ({ isCSKWin }) => {
  useEffect(() => {
    if (isCSKWin) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isCSKWin]);

  return null;
};

export default Fireworks;

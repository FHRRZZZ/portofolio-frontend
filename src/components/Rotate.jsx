import React from "react";
import RotatingText from "./RotatingText";

function Rotate() {
  return (
    <div className="text-center">
      <RotatingText
        texts={["React", "Bits", "Is", "Cool!"]}
        mainClassName="text-blue-500"
        interval={2500}
      />
    </div>
  );
}

export default Rotate;

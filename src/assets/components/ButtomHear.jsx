import React from "react";
import { Html } from "@react-three/drei";

function ButtomHear({ handleButtom }) {
  return (
    <>
      <Html center position={[0,-1,0]}>
        <button 
        className="buttonHeart" 
        onClick={handleButtom}
        >
          ❤️‍🔥
        </button>
      </Html>
    </>
  );
}

export default ButtomHear;

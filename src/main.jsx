import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas >
      <ambientLight intensity={0.9} color={'white'}/>
      <pointLight position={[1, 1, 7]} color={'white'} intensity={40}/>
      <OrbitControls 
        minPolarAngle={Math.PI *0.40}
        maxPolarAngle={Math.PI * 0.65}
        minAzimuthAngle={-Math.PI *0.15}
        maxAzimuthAngle={Math.PI *0.15}
        enableZoom={false}
      />
      <Experience />
    </Canvas>
  </StrictMode>
);

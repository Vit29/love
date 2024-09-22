import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { loaderModel } from "./assets/components/LoaderModel";
import { Float } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Heart from "./assets/components/heart";
import ButtomHeart from "./assets/components/ButtomHear";

function Experience() {
  const [objModel, setObjModel] = useState(null);
  const [heartList, setHeartList] = useState([]);

  useEffect(() => {
    loaderModel("modelOBJ/Love.obj", "modelOBJ/Love.mtl", setObjModel);
  }, []);
  
  if (!objModel) return null;
  objModel.children[0].material.color.set("red");
  const modelGeometry = objModel.children[0].geometry;
  const modelMaterial = objModel.children[0].material;
  
  const handleButtom = () => {
    setHeartList((prev) => [
      ...prev,
      <Heart
        key={prev.length}
        modelGeometry={modelGeometry}
        modelMaterial={modelMaterial}
      />,
    ]);
  };


  return (
    <>
    <Float speed={2.5}>
      <Text fontSize={0.5} font="./Poppins-Black.ttf" position={[0, 0.5, 0]}>TE AMO</Text>
      {/* <Text fontSize={0.5} font="./Poppins-Black.ttf" position={[0, 0, 0]}>&</Text> */}
      <Text fontSize={0.5} font="./Poppins-Black.ttf" position={[0, 0, 0]}>VANESSA</Text>
    </Float>

      <ButtomHeart handleButtom={handleButtom} />

      <Physics gravity={[0, 0.5, 0]}>{heartList}</Physics>
    </>
  );
}

export default Experience;

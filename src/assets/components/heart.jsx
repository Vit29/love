import React from "react";
import { useMemo } from "react";
import { InstancedRigidBodies } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

function Heart( { modelGeometry, modelMaterial }) {
  const count = 50;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < count; i++) {
      const randomScale = Math.random() * 0.010 + 0.005;

      instances.push({
        key: `instace_heart_${i}`,
        position: [
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 5,
        ],
        rotation: [0, Math.random() * Math.PI, 0],
        scale: [randomScale, randomScale, randomScale],
      });
    }
    return instances;
  }, []);

  return (
    <InstancedRigidBodies
      position={[0, -14, 0]}
      instances={instances}
      linearDamping={0.8}
    >
      <instancedMesh  
      args={[modelGeometry, modelMaterial, count]} 
      count={count}
      frustumCulled={false}
      />
    </InstancedRigidBodies>
  );
}

export default Heart;

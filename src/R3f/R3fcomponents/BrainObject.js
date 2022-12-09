import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BrainObject(props) {
  const { nodes, materials } = useGLTF("/GoldBrain.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0,0,0]}
        rotation={[-Math.PI / 2, 0, 0.09]}
        scale={0.02}
      >
        <group position={[0,0,0]} scale={1000}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_01_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_02_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_03_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_04_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_05_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brain_Part_06_BRAIN_TEXTURE_blinn2_0.geometry}
              material={materials.BRAIN_TEXTURE_blinn2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/GoldBrain.glb");

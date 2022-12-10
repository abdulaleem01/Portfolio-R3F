import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House2(props) {
  const { nodes, materials } = useGLTF("/House2.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.06, 3.42, -9.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.08, 1, 1]}
          >
            <mesh
              geometry={nodes["m_House_Material_#158_0"].geometry}
              material={materials.Material_158}
            />
            <mesh
              geometry={nodes["m_House_Material_#1_0"].geometry}
              material={materials.Material_1}
            />
            <mesh
              geometry={nodes["m_House_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
            <mesh
              geometry={nodes["m_House_Material_#81_0"].geometry}
              material={materials.Material_81}
            />
          </group>
          <group
            position={[-22.58, 29.74, 18.11]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes["m_WoodenBeams_Material_#25_0"].geometry}
              material={materials.Material_25}
            />
          </group>
          <group
            position={[-40.9, -17.01, -29]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["m_Ground_Material_#58_0"].geometry}
              material={materials.Material_58}
            />
          </group>
          <group
            position={[-98.88, -12.23, 8.37]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["m_Pier_Material_#31_0"].geometry}
              material={materials.Material_31}
            />
          </group>
          <group
            position={[-34.08, -16.03, -19.55]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["m_StoneLedge_Material_#29_0"].geometry}
              material={materials.Material_29}
            />
          </group>
          <group
            position={[29.66, 0.3, -27.34]}
            rotation={[-0.87, 0, 0]}
            scale={0.9}
          >
            <mesh
              geometry={nodes["m_Clothline_Material_#166_0"].geometry}
              material={materials.Material_166}
            />
            <mesh
              geometry={nodes["m_Clothline_Material_#26_0"].geometry}
              material={materials.Material_26}
            />
          </group>
          <group
            position={[39.82, -9.33, 70.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.23}
          >
            <mesh
              geometry={nodes["m_Rock_Material_#27_0"].geometry}
              material={materials.Material_27}
            />
          </group>
          <group
            position={[-35.2, 7.05, -30.54]}
            rotation={[Math.PI, -1.53, Math.PI]}
          >
            <mesh
              geometry={nodes["m_Fence_Material_#59_0"].geometry}
              material={materials.Material_59}
            />
          </group>
          <group
            position={[-60.78, -11.39, -17.72]}
            rotation={[-1.57, 0.01, 1.83]}
          >
            <mesh
              geometry={nodes["m_Barrel_Material_#30_0"].geometry}
              material={materials.Material_30}
            />
          </group>
          <group
            position={[-65.05, -11.19, 47.87]}
            rotation={[-1.55, 0.04, -1.2]}
            scale={1.06}
          >
            <mesh
              geometry={nodes["m_Log_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
          </group>
          <group position={[52.37, 60.97, 11.29]} rotation={[-1.55, 0, 0]}>
            <mesh
              geometry={nodes["m_Tree_Material_#33_0"].geometry}
              material={materials.Material_33}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#101_0"].geometry}
              material={materials.Material_101}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#102_0"].geometry}
              material={materials.Material_102}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#103_0"].geometry}
              material={materials.Material_103}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#106_0"].geometry}
              material={materials.Material_106}
            />
          </group>
          <group
            position={[52.2, 4.33, 72.56]}
            rotation={[-1.58, -1.05, -0.01]}
            scale={1.14}
          >
            <mesh
              geometry={nodes["m_Grass_Material_#109_0"].geometry}
              material={materials.Material_109}
            />
          </group>
          <group
            position={[-22.58, 29.74, 18.11]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes["m_Bricks_Material_#32_0"].geometry}
              material={materials.Material_32}
            />
          </group>
          <group
            position={[-9.85, -15.74, 20.87]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["m_Water_Material_#152_0"].geometry}
              material={materials.Material_152}
            />
          </group>
          <group
            position={[-73.7, -11.77, 26.64]}
            rotation={[-Math.PI / 2, 0.09, 0]}
            scale={0.87}
          >
            <group position={[-9.56, 0, 4.66]}>
              <mesh
                geometry={nodes["m_Plants_Material_#155_0"].geometry}
                material={materials.Material_155}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/House2.glb");

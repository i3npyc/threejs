import React from "react";
import { useGLTF } from "@react-three/drei";

export const Spitfire = (props) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("models/spitfire.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.66, 0.319, 1.336]}
        rotation={[Math.PI / 2, -0.017, 0]}
      >
        <mesh
          geometry={nodes.carmainbody001.geometry}
          material={materials["28_int_gauges"]}
          position={[0.005, 0, -0.051]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          geometry={nodes.carmainbody002.geometry}
          material={materials.headglass}
          position={[0.665, -1.336, 0.308]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          geometry={nodes.carmainbody005.geometry}
          material={materials.tire}
          position={[0.666, -3.751, 0.327]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
      <group position={[0.105, 0.669, 0.418]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.ap_triumph_spitfire_1.geometry}
          material={materials.TRIUMPH_SPITFIRE_CHROME}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_2.geometry}
          material={materials.steeringwheel}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_3.geometry}
          material={materials.carbody}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_4.geometry}
          material={materials.TRIUMPH_SPITFIRE_DASHBOARD}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_5.geometry}
          material={materials.headlight_light}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_6.geometry}
          material={materials.number_plate}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire_7.geometry}
          material={materials.number_plate}
        />
      </group>
      <mesh
        geometry={nodes.ap_triumph_spitfire002.geometry}
        material={materials.TRIUMPH_SPITFIRE_WINDOWS}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.ap_triumph_spitfire004_1.geometry}
          material={materials.wheel_rimrim}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire004_2.geometry}
          material={materials.tire}
        />
      </group>
      <mesh
        geometry={nodes.ap_triumph_spitfire004.geometry}
        material={materials.TRIUMPH_SPITFIRE_floor}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire006.geometry}
        material={materials.underbody}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire007.geometry}
        material={materials.leather}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire008.geometry}
        material={materials.HEADLIGHT_glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire005.geometry}
        material={materials.wheel_rimrim}
        position={[-0.643, 0.875, 0.389]}
        rotation={[0.706, -0.566, -0.285]}
        scale={[4.508, 0.926, 1.261]}
      />
      <group position={[0.105, 0.669, 0.447]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.ap_triumph_spitfire010_1.geometry}
          material={materials.TRIUMPH_SPITFIRE_CHROME}
        />
        <mesh
          geometry={nodes.ap_triumph_spitfire010_2.geometry}
          material={materials.number_plate}
        />
      </group>
      <mesh
        geometry={nodes.ap_triumph_spitfire010.geometry}
        material={materials["underbody.001"]}
        position={[0.105, 0.669, 0.418]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire011.geometry}
        material={materials.TRIUMPH_SPITFIRE_CHROME}
        position={[-0.206, 0.271, -1.822]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.ap_triumph_spitfire012.geometry}
        material={materials.TRIUMPH_SPITFIRE_CHROME}
        position={[0.317, 0.669, 0.418]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("models/spitfire.glb");

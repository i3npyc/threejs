import React from "react";
import { useGLTF } from "@react-three/drei";

export const Mustang = (props) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("models/mustang.glb");

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cylinder001_mustang_extra_0.geometry}
            material={materials.mustang_extra}
          />
          <mesh
            geometry={nodes.Cylinder001_mustang_inner_0.geometry}
            material={materials.mustang_inner}
          />
        </group>
        <mesh
          geometry={nodes.Plane003_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane006_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane009_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane008_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane010_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane011_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder002_mustang_tire_0.geometry}
          material={materials.mustang_tire}
          position={[5.782, 63.765, 14.151]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane012_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[-3.142, 63.765, 14.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane014_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane015_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane016_MUSTANGWINDOW_0.geometry}
          material={materials.MUSTANGWINDOW}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={12.166}
        />
        <mesh
          geometry={nodes.Cylinder003_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[-153.342, 73.458, 14.151]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[4.049, 4.049, 1.533]}
        />
        <mesh
          geometry={nodes.Plane017_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane018_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane019_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane022_mustang_inner_0.geometry}
          material={materials.mustang_inner}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane024_MUSTANGWINDOW_0.geometry}
          material={materials.MUSTANGWINDOW}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane025_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane026_MUSTANGWINDOW_0.geometry}
          material={materials.MUSTANGWINDOW}
          position={[0, 63.765, 14.269]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane023_mustang_tire_0.geometry}
          material={materials.mustang_tire}
          position={[4.803, 38.913, 14.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[67.008, 48.963, 48.691]}
        />
        <mesh
          geometry={nodes.Cylinder004_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 62.607, 12.496]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[142.307, 70.425, 14.151]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane028_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane029_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane031_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane032_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane033_mustangcover_0.geometry}
          material={materials.mustangcover}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube001_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[0, 63.765, 14.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.177}
        />
        <mesh
          geometry={nodes.Cube002_mustang_extra_0.geometry}
          material={materials.mustang_extra}
          position={[-154.377, 57.021, 14.151]}
          rotation={[-Math.PI / 2, -0.365, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.dodge_polara_1969001_mustang_tire_0.geometry}
          material={materials.mustang_tire}
          position={[0, 63.765, 14.151]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={31.766}
        />
        <mesh
          geometry={nodes.Cube003_mustang_inner_0.geometry}
          material={materials.mustang_inner}
          position={[142.307, 70.425, 14.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube004_mustang_inner_0.geometry}
          material={materials.mustang_inner}
          position={[150.38, 75.907, 14.151]}
          rotation={[-Math.PI / 2, 0.167, 0]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload("models/mustang.glb");

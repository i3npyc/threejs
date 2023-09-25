import React from "react";
import { useGLTF } from "@react-three/drei";

export const SelBlender = (props) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("models/selBlender.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.mercedes_300sel_stock.geometry}
        material={materials.caliper}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock001.geometry}
        material={materials.window}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock002.geometry}
        material={materials.black}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock003.geometry}
        material={materials.body}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock004.geometry}
        material={materials.body_2}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock005.geometry}
        material={materials.chrome}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock006.geometry}
        material={materials.chrome_2}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock007.geometry}
        material={materials.emblem}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock008.geometry}
        material={materials.frame}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock009.geometry}
        material={materials.mirrorLeft}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock010.geometry}
        material={materials.plastic2}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock011.geometry}
        material={materials.rubber_trim}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock012.geometry}
        material={materials.badge}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock013.geometry}
        material={materials.gauge_needle}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock014.geometry}
        material={materials.detail_glass_amber}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock015.geometry}
        material={materials.detail_glass_clear}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock016.geometry}
        material={materials.detail_glass_red}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock017.geometry}
        material={materials.misc}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock018.geometry}
        material={materials.reflector}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <group position={[0, -0.021, 0]} rotation={[1.565, 0, 0]}>
        <mesh
          geometry={nodes.mercedes_300sel_stock019_1.geometry}
          material={materials.textured_reflector}
        />
        <mesh
          geometry={nodes.mercedes_300sel_stock019_2.geometry}
          material={materials.lights_glass}
        />
      </group>
      <mesh
        geometry={nodes.mercedes_300sel_stock021.geometry}
        material={materials.head_light}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock022.geometry}
        material={materials.reverse_light_lod0}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock023.geometry}
        material={materials.tail_light_lod0}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock024.geometry}
        material={materials.undercarriage}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock025.geometry}
        material={materials.badge_cp}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock026.geometry}
        material={materials.bump_leather2}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock027.geometry}
        material={materials.bump_leather3}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock028.geometry}
        material={materials.cloth}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock029.geometry}
        material={materials.gauge_emissive}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock030.geometry}
        material={materials.glass}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock031.geometry}
        material={materials.headliner}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock032.geometry}
        material={materials.leather}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock033.geometry}
        material={materials.metal}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock034.geometry}
        material={materials.mirrorMiddle}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock035.geometry}
        material={materials.mottled}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock036.geometry}
        material={materials.plastic}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock037.geometry}
        material={materials.reflector_cp}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock038.geometry}
        material={materials.rubber}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock039.geometry}
        material={materials.solid}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock040.geometry}
        material={materials.wood}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock041.geometry}
        material={materials.chrome_rim}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock042.geometry}
        material={materials.inner_rim}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock043.geometry}
        material={materials.outer_rim}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock044.geometry}
        material={materials.rim}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock046.geometry}
        material={materials.brake}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock047.geometry}
        material={materials.hub}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock048.geometry}
        material={materials.EXT_rubber_tire}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock049.geometry}
        material={materials.inner_rim}
        position={[0.767, 0.117, 1.625]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock050.geometry}
        material={materials.caliper}
        position={[0.696, 0.115, 1.726]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock051.geometry}
        material={materials.chrome_rim}
        position={[0.858, 0.117, 1.67]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock052.geometry}
        material={materials.outer_rim}
        position={[0.759, 0.117, 1.621]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock053.geometry}
        material={materials.rim}
        position={[0.868, 0.122, 1.671]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock054.geometry}
        material={materials.brake}
        position={[0.743, 0.117, 1.613]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock055.geometry}
        material={materials.hub}
        position={[0.773, 0.117, 1.628]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock056.geometry}
        material={materials.EXT_rubber_tire}
        position={[0.76, 0.117, 1.621]}
        rotation={[Math.PI / 2, 0, 0.458]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock057.geometry}
        material={materials.inner_rim}
        position={[-0.753, 0.119, 1.643]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock058.geometry}
        material={materials.caliper}
        position={[-0.791, 0.121, 1.761]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock059.geometry}
        material={materials.chrome_rim}
        position={[-0.843, 0.108, 1.598]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock060.geometry}
        material={materials.outer_rim}
        position={[-0.745, 0.12, 1.647]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock061.geometry}
        material={materials.rim}
        position={[-0.853, 0.112, 1.597]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock062.geometry}
        material={materials.brake}
        position={[-0.729, 0.122, 1.655]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock063.geometry}
        material={materials.hub}
        position={[-0.765, 0.117, 1.632]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock064.geometry}
        material={materials.EXT_rubber_tire}
        position={[-0.745, 0.12, 1.647]}
        rotation={[1.513, 0.092, 0.47]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock020.geometry}
        material={materials["Матеріал.001"]}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
      <mesh
        geometry={nodes.mercedes_300sel_stock045.geometry}
        material={materials["detail_glass_amberdd.001"]}
        position={[0, -0.021, 0]}
        rotation={[1.565, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("models/selBlender.glb");

import React, { FC, PropsWithChildren } from "react";

import { OrbitControls } from "@react-three/drei";

export const Experience: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <OrbitControls />
      <group position-y={-0.5}>{children}</group>
      <ambientLight intensity={1} />
    </>
  );
};

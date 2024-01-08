import { OrbitControls, OrbitControlsProps, Preload } from "@react-three/drei";
import { Canvas as BaseCanvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

interface Props {
  shadows?: any;
  camera?: any;
  orbitControls?: OrbitControlsProps;
  children: React.ReactNode;
}

const Canvas = ({ shadows, camera, orbitControls = {}, children }: Props) => {
  return (
    <BaseCanvas
      frameloop="demand"
      shadows={shadows}
      camera={camera}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} {...orbitControls} />
        {children}
      </Suspense>

      <Preload all />
    </BaseCanvas>
  );
};

export default Canvas;

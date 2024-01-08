"use client";

import useIsMobile from "@/lib/useIsMobile";
import { useGLTF } from "@react-three/drei";
import Canvas from "./Canvas";

const ComputerCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const isMobile = useIsMobile();

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      orbitControls={{
        maxPolarAngle: Math.PI / 2,
        minPolarAngle: Math.PI / 2,
      }}
    >
      <mesh>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-3, 10, 4]}
          angle={0.12}
          penumbra={1}
          intensity={300}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </Canvas>
  );
};

export default ComputerCanvas;

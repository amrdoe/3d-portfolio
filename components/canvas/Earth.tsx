import { useGLTF } from "@react-three/drei";
import Canvas from "./Canvas";

const EarthCanvas = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      orbitControls={{
        autoRotate: true,
        maxPolarAngle: Math.PI / 2,
        minPolarAngle: Math.PI / 2,
      }}
    >
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      ></primitive>
    </Canvas>
  );
};

export default EarthCanvas;

"use client";

import { Decal, Float, useTexture } from "@react-three/drei";
import React from "react";
import Canvas from "./Canvas";
import { StaticImageData } from "next/image";

const BallCanvas = ({ icon }: { icon: StaticImageData }) => {
  return (
    <Canvas>
      <Ball imgUrl={icon.src}></Ball>
    </Canvas>
  );
};

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight position={[0, 0, 0.05]}></directionalLight>
      <mesh castShadow recieveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        ></meshStandardMaterial>
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        ></Decal>
      </mesh>
    </Float>
  );
};

export default BallCanvas;

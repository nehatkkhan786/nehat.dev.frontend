"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Stage, Loader, Html, useProgress } from "@react-three/drei";
import React, { Suspense } from "react";
import { Model } from "./Modals/Model";
import { CircularProgress } from "@mui/material";
import { Model2 } from "./Modals/Modal2";



const My3dCanvas = () => {
  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  
  return (
    <>
      <Canvas>
        <Suspense fallback={<Loader/>}>
          <Stage environment="city" intensity={0.5}>
            <Model />
            {/* <Model2/> */}
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default My3dCanvas;

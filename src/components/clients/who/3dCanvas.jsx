"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Stage, Loader, Html } from "@react-three/drei";
import React, { Suspense } from "react";
import { Model } from "./Modals/Model";
import { CircularProgress } from "@mui/material";

const My3dCanvas = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={<Html><CircularProgress color="inherit" /></Html>}>
          <Stage environment="city" intensity={0.5}>
            <Model />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default My3dCanvas;

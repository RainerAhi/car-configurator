import { Environment, MeshReflectorMaterial, OrbitControls, SoftShadows, } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { MeshPhysicalMaterial, MeshStandardMaterial, PlaneGeometry } from "three";
import Car from "./Car";
import Configurator from "./Configurator";

export default function Experience() {

  return (
    <>
      <SoftShadows intensity={ 20 } />
      <ambientLight intensity={0.5} />
      <directionalLight shadow-bias={ -0.01 } castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial metalness={ 0.5 } receiveShadow castShadow shadowMap={ true } />
        </mesh>
      <Suspense fallback >
        <Car position={ [ 0, 0, 0 ] } />
      </Suspense>
      <Environment preset='warehouse' />
      <Configurator />
      </>
  )
}

import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();

  const helper = useHelper(ref, THREE.SpotLightHelper, "red");

  const { color, distance, attenuation, angle, anglePower } = useControls({
    color: "#0876ae5",
    distance: 6,
    attenuation: 2.2,
    angle: 1,
    anglePower: 1,
  });

  return (
    <SpotLight
      ref={ref}
      color={color}
      distance={distance}
      attenuation={attenuation}
      angle={angle}
      anglePower={anglePower}
    />
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />

        <Lights />
        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial
            color="white"
            clearcoat={0.5}
            reflectivity={0.8}
          />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface AntennaProps {
  position: [number, number, number];
}

const Antenna = ({ position }: AntennaProps) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh ref={ref}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

export default Antenna;

import React from "react";
import { Text } from "@react-three/drei";

interface ScreenProps {
  visible: boolean;
}

const Screen: React.FC<ScreenProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <group position={[0, 2, -1]}>
      <mesh>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="blue" transparent opacity={0.5} />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        RF3 tehtävä!
      </Text>
    </group>
  );
};

export default Screen;

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

interface ButtonProps {
  position: [number, number, number];
  onClick: () => void;
  activeColor?: string;
  inactiveColor?: string;
  darkMode?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  position,
  onClick,
  activeColor = "red",
  inactiveColor = "green",
  darkMode = false,
}) => {
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 0.8 : 1,
    config: { tension: 200, friction: 10 },
  });

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onClick={() => {
        setActive(!active);
        onClick();
      }}
    >
      <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
      <meshStandardMaterial color={darkMode ? "white" : active ? activeColor : inactiveColor} />
    </animated.mesh>
  );
};

export default Button;

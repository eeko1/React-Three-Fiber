import { Canvas } from "@react-three/fiber";
import { useState, useMemo } from "react";
import "./App.css";
import Ground from "./components/Ground";
import {
  FlyControls,
  PointerLockControls,
  Sky,
  Stats,
} from "@react-three/drei";
import Crosshair from "./components/Crosshair";
import Button from "./components/Button";
import Screen from "./components/Screen";
import Antenna from "./components/Antenna";

const App = () => {
  const gridSize = 50;
  const [screenVisible, setScreenVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const grounds = useMemo(() => {
    const items = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        items.push(
          <Ground
            key={`${i}-${j}`}
            position={[i - gridSize / 2, 0, j - gridSize / 2]}
            frustumCulled={true}
          />
        );
      }
    }
    return items;
  }, [gridSize]);

  return (
    <section className="three-canvas">
      <Canvas shadows camera={{ position: [4, 1, 25], fov: 60 }}>
        <PointerLockControls />
        <FlyControls rollSpeed={0} movementSpeed={5} dragToLook />
        <Stats />
        <Sky sunPosition={darkMode ? [-100, -40, -50] : [-50, 40, 50]} />
        <ambientLight intensity={darkMode ? 0.1 : 0.5} />
        <directionalLight position={darkMode ? [-100, -40, -50] : [-50, 40, 50]} castShadow />
        <Button
          position={[-1, 0.2, -1]}
          onClick={() => setDarkMode(!darkMode)}
          activeColor="black"
          inactiveColor="yellow"
          darkMode={darkMode}
        />
        <Button
          position={[1, 0.2, -1]}
          onClick={() => setScreenVisible(!screenVisible)}
          darkMode={darkMode}
        />
        <Antenna position={[0, 0.5, -3]}  />
        <Screen visible={screenVisible} />


        {grounds}
      </Canvas>
      <Crosshair />
    </section>
  );
};

export default App;

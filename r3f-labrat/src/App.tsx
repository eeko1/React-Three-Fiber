import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';

import './App.css';
import Box from './components/Box';
import Ground from './components/Ground';
import {
  FlyControls,
  PointerLockControls,
  Sky,
  Stats,
} from '@react-three/drei';
import Crosshair from './components/Crosshair';
import Model2 from './components/Model2';

const App = () => {
  const gridSize = 50; // Reduced from 100 to 50 for better performance

  const grounds = useMemo(() => {
    const items = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        items.push(
          <Ground
            key={`${i}-${j}`}
            position={[i - gridSize / 2, 0, j - gridSize / 2]}
            frustumCulled={true}
          />,
        );
      }
    }
    return items;
  }, []);

  return (
    <section className="three-canvas">
      <Canvas shadows camera={{ position: [4, 1, 25], fov: 60 }}>
        <PointerLockControls />
        <FlyControls rollSpeed={0} movementSpeed={5} dragToLook />
        <Stats />
        <Sky sunPosition={[-50, 40, 50]} />
        <ambientLight />
        <directionalLight position={[-50, 40, 50]} castShadow />
        <Box
          onClick={() => {
            console.log('Box 1 klikattu');
          }}
          rotation={[0, 1, 0]}
          position={[-1, 2, 0]}
          scale={[4, 4, 4]}
        />
        <Box
          onClick={() => {
            console.log('Box 2 klikattu');
          }}
          rotation={[0, 1, 0]}
          position={[5, 2, -2]}
          scale={[4, 4, 4]}
        />
        <Model2 position={[7, 0.42, 5]} scale={[0.1, 0.1, 0.1]} />
        {grounds}
      </Canvas>
      <Crosshair />
    </section>
  );
};

export default App;

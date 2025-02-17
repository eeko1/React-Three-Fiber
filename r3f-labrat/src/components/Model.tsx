import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Model = (props: ThreeElements['mesh']) => {
  const gltf = useLoader(GLTFLoader, './models/tractor_01/scene.gltf');

  return <primitive {...props} object={gltf.scene} scale={0.1} />;
};

export default Model;

import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector3 } from 'three';
import './App.css';

import Box from './components/Box';
import CameraController from './components/CameraController';

function App() {

  const [rotationState, setRotationState] = useState(false)

  return (
    <>
      <div style={{width: '600px', height:'600px'}}>
        <Canvas flat linear frameloop='always' camera={{position: [0, 0, 10], fov: 75, near:0.01, far: 1000}}>
          <CameraController/>
          <perspectiveCamera/>
          <Box position={new Vector3(-2,0,0)} geometryArgs={[2,2,2]} rotate={{rotationState: rotationState, axis: ['y', 'z']}}/>
          <Box position={new Vector3(2,0,0)} geometryArgs={[2,2,2]} rotate={{rotationState: rotationState, axis: 'y'}}/>
        </Canvas>
      </div>
      <button
        onClick={():void => setRotationState(!rotationState)}
      >
          Toggle
      </button>
    </>
  );
}

export default App;

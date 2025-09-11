import { OrbitControls, Sphere } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


function App() {

  return (
    <>
      <Canvas camera={{
            position: [ 3, 3, 3 ]
          }}
        >
        <color attach="background" args={['#f0f0f0']} />
        <OrbitControls />
        <mesh>
          <cylinderGeometry args={[1, 1, 1, 32]}/>
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default App

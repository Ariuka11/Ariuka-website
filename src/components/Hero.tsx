import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";
import texture from "../images/map.jpg";
import AnimatedSphere from "./AnimatedSphere";

const project = {
  begin: {
    x: "-100vw",
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};
const me = {
  begin: {
    x: "100vw",
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};
// const Box = () => {
//   const colorMap = useLoader(TextureLoader, texture);
//   const mesh = useRef<THREE.Mesh>(null!);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
//   return (
//     <mesh ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial map={colorMap} attach="material" />
//     </mesh>
//   );
// };

const Hero = () => {
  return (
    <div className="heroContainer" id="hero">
      <main>
        <section>
          <motion.h1 variants={project} initial="begin" animate="start">
            Hire
          </motion.h1>
          <motion.h1 id="me" variants={me} initial="begin" animate="start">
            Me
          </motion.h1>
        </section>
        <h2>Full Stack Developer</h2>
        <h2 className="passionate">Passionate</h2>
        {/* <Canvas
          className="canvas"
          camera={{ position: [-10, 2, 10], fov: 20 }}
          shadows
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[-2, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            <mesh rotation={[-Math.PI / 2, 0, 2]} position={[0, -3, 0]}>
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              
              <shadowMaterial attach="material" color="red" />
            </mesh>
          </group>
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas> */}
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[-2, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </main>
    </div>
  );
};

export default Hero;

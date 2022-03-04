import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";

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

const Box = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
};

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
        <Canvas camera={{ position: [-5, 2, 10], fov: 20 }} shadows>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              {/* This will cast a shadow */}
              <shadowMaterial attach="material" color="red" />
            </mesh>
          </group>
          <Box />
        </Canvas>
      </main>
    </div>
  );
};

export default Hero;

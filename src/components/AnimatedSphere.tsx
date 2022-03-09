import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="#8352fd"
        distort={0.5}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimatedSphere;

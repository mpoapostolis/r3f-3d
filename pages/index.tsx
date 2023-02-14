import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";

function Hero() {
  const fbx = useFBX("/models/dance.fbx");
  fbx.traverse((child) => {
    console.log(child);
  });
  return (
    <mesh position={[0, 0, -5]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={fbx} />;
    </mesh>
  );
}

export default function Admin() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen ">
      <Canvas className="pointer-events-none select-none">
        <Environment preset="park" background />
        <Hero />
        <OrbitControls />
        <gridHelper position={[0, -2, 0]} args={[100, 100, 20, 20]} />
      </Canvas>
    </div>
  );
}

import { Hero } from "@/components/hero";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";

// function Hero() {
//   const fbx = useGLTF("/models/hero.gltf");
//   console.log(fbx);
//   return <primitive object={fbx} />;
// }

export default function Admin() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen ">
      <Canvas className="pointer-events-none select-none">
        <Environment preset="park" background />
        <Hero />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.SkinnedMesh;
    mesh_0_1: THREE.SkinnedMesh;
    mesh_0_2: THREE.SkinnedMesh;
    mesh_0_3: THREE.SkinnedMesh;
    mesh_0_4: THREE.SkinnedMesh;
    mesh_0_5: THREE.SkinnedMesh;
    mesh_0_6: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    Mdea_MAT: THREE.MeshStandardMaterial;
    Mdea_MAT_: THREE.MeshStandardMaterial;
  };
};

type ActionName = "CatwalkWalk" | "HipHopDancing0" | "Idle";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Hero(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/hero.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<any>(animations, group);

  useEffect(() => {
    actions?.HipHopDancing0?.play();
  }, []);

  return (
    <group position={[0, 0, -15]} ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group position={[-0.01, -8.29, 0.32]}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Mdea_mesh">
            <skinnedMesh
              name="mesh_0"
              geometry={nodes.mesh_0.geometry}
              material={materials.Mdea_MAT}
              skeleton={nodes.mesh_0.skeleton}
            />
            <skinnedMesh
              name="mesh_0_1"
              geometry={nodes.mesh_0_1.geometry}
              material={materials.Mdea_MAT_}
              skeleton={nodes.mesh_0_1.skeleton}
            />
            <skinnedMesh
              name="mesh_0_2"
              geometry={nodes.mesh_0_2.geometry}
              material={materials.Mdea_MAT}
              skeleton={nodes.mesh_0_2.skeleton}
            />
            <skinnedMesh
              name="mesh_0_3"
              geometry={nodes.mesh_0_3.geometry}
              material={materials.Mdea_MAT_}
              skeleton={nodes.mesh_0_3.skeleton}
            />
            <skinnedMesh
              name="mesh_0_4"
              geometry={nodes.mesh_0_4.geometry}
              material={materials.Mdea_MAT}
              skeleton={nodes.mesh_0_4.skeleton}
            />
            <skinnedMesh
              name="mesh_0_5"
              geometry={nodes.mesh_0_5.geometry}
              material={materials.Mdea_MAT_}
              skeleton={nodes.mesh_0_5.skeleton}
            />
            <skinnedMesh
              name="mesh_0_6"
              geometry={nodes.mesh_0_6.geometry}
              material={materials.Mdea_MAT}
              skeleton={nodes.mesh_0_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cac-1676413153068.glb");
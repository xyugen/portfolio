"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useStateStore } from "@/store/state-store";

function WireframeTorus() {
  const groupRef = useRef<THREE.Group>(null);
  const velocity = useStateStore((s) => s.scrollVelocity);

  const geometry = useMemo(() => new THREE.TorusGeometry(1.6, 0.5, 16, 40), []);

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#2b7fff"),
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      }),
    []
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#2b7fff"),
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const baseSpeed = 0.001;
    const scrollBoost = Math.abs(velocity) * 0.005;
    groupRef.current.rotation.x += baseSpeed + scrollBoost;
    groupRef.current.rotation.y += baseSpeed * 0.7 + scrollBoost * 0.5;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh geometry={geometry} material={material} />
        <mesh geometry={geometry} material={glowMaterial} scale={1.05} />
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full" style={{ minHeight: 300 }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <WireframeTorus />
      </Canvas>
    </div>
  );
}

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import type { Group } from "three";

function OrbCluster({ mobile }: { mobile: boolean }) {
  const group = useRef<Group>(null);
  const count = mobile ? 4 : 8;
  const points = useMemo(
    () =>
      Array.from({ length: count }, (_, idx) => ({
        x: Math.sin(idx * 1.3) * (mobile ? 2.2 : 3.4),
        y: Math.cos(idx * 0.9) * (mobile ? 1.1 : 1.8),
        z: -idx * 0.22,
        scale: 0.22 + (idx % 4) * 0.08,
      })),
    [count, mobile],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.12) * 0.24;
    group.current.rotation.x = Math.cos(t * 0.08) * 0.14;
  });

  return (
    <group ref={group}>
      {points.map((point, index) => (
        <Float
          key={`${point.x}-${point.y}-${index}`}
          speed={0.75 + index * 0.06}
          rotationIntensity={0.6}
          floatIntensity={0.8}
        >
          <Sphere args={[point.scale, 28, 28]} position={[point.x, point.y, point.z]}>
            <MeshDistortMaterial
              color={index % 2 === 0 ? "#5f86ff" : "#58d7ff"}
              roughness={0.2}
              metalness={0.72}
              distort={mobile ? 0.1 : 0.2}
              speed={mobile ? 1.2 : 1.8}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
      ))}
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[mobile ? 0.4 : 0.56, 0]} position={[0, 0.2, -0.7]}>
          <MeshDistortMaterial color="#a279ff" roughness={0.15} metalness={0.85} distort={0.24} speed={2} />
        </Icosahedron>
      </Float>
    </group>
  );
}

function HeroScene({ mobile }: { mobile: boolean }) {
  return (
    <div className="hero-canvas-shell" aria-hidden="true">
      <Canvas
        dpr={mobile ? 1 : [1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 52 }}
        gl={{ antialias: !mobile, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 8]} intensity={1.1} color="#7ea1ff" />
        <pointLight position={[-4, -2, 3]} intensity={0.7} color="#59d4ff" />
        <Suspense fallback={null}>
          <OrbCluster mobile={mobile} />
          <Stars radius={mobile ? 44 : 66} depth={40} count={mobile ? 420 : 1400} factor={3.2} saturation={0} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene;

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Campo de pontos em grade que ondula suavemente + leve parallax com o mouse.
 * three.js via @react-three/fiber. Puramente decorativo, sem métricas.
 */

const GRID = 46; // 46 x 46 = 2116 pontos
const SPACING = 0.32;

function Wave() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(GRID * GRID * 3);
    let i = 0;
    for (let x = 0; x < GRID; x++) {
      for (let z = 0; z < GRID; z++) {
        arr[i++] = (x - GRID / 2) * SPACING;
        arr[i++] = 0;
        arr[i++] = (z - GRID / 2) * SPACING;
      }
    }
    return arr;
  }, []);

  useFrame(({ clock, pointer, camera }) => {
    const points = ref.current;
    if (!points) return;

    const t = clock.getElapsedTime();
    const attr = points.geometry.attributes.position as THREE.BufferAttribute;

    for (let idx = 0; idx < attr.count; idx++) {
      const x = attr.getX(idx);
      const z = attr.getZ(idx);
      const y =
        Math.sin(x * 0.55 + t * 0.9) * 0.32 +
        Math.cos(z * 0.5 + t * 0.7) * 0.32;
      attr.setY(idx, y);
    }
    attr.needsUpdate = true;
    points.rotation.y = t * 0.04;

    // parallax sutil com o mouse
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.03;
    camera.position.y += (5.5 + pointer.y * 0.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#06b6d4"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 5.5, 9], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    >
      <Wave />
    </Canvas>
  );
}

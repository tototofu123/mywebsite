import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    MeshTransmissionMaterial,
    Environment,
    Float,
    Stars,
    Text,
    PerformanceMonitor
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

// ── Animated Crystal Shard ──────────────────────────────────────────────────
const Crystal = ({ position, rotation, scale, speed = 0.4 }) => {
    const mesh = useRef();

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.y = state.clock.getElapsedTime() * speed;
        mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speed * 0.5) * 0.2;
        mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
    });

    return (
        <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
            <octahedronGeometry args={[1, 0]} />
            <MeshTransmissionMaterial
                backside
                samples={4}
                resolution={256}
                transmission={1}
                roughness={0.05}
                thickness={1.5}
                ior={1.5}
                chromaticAberration={0.06}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.3}
                temporalDistortion={0.2}
                color="#e06c55"
                attenuationColor="#ff6b4a"
                attenuationDistance={2}
            />
        </mesh>
    );
};

// ── Procedural Particle Field ───────────────────────────────────────────────
const ParticleField = ({ count = 800 }) => {
    const mesh = useRef();

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const palette = [
            new THREE.Color('#e06c55'),
            new THREE.Color('#f3e8d0'),
            new THREE.Color('#c9a882'),
        ];

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            const c = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
            />
        </points>
    );
};

// ── Orbiting Ring ───────────────────────────────────────────────────────────
const OrbitRing = ({ radius = 3, speed = 0.3, thickness = 0.01 }) => {
    const mesh = useRef();

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.z = state.clock.getElapsedTime() * speed;
        mesh.current.rotation.x = Math.PI / 4 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    });

    return (
        <mesh ref={mesh}>
            <torusGeometry args={[radius, thickness, 4, 128]} />
            <meshStandardMaterial
                color="#e06c55"
                emissive="#e06c55"
                emissiveIntensity={2}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
};

// ── Scene ───────────────────────────────────────────────────────────────────
const HeroScene = () => {
    return (
        <>
            <Environment preset="night" />
            <Stars radius={50} depth={50} count={2000} factor={2} saturation={0} fade speed={0.5} />
            <ambientLight intensity={0.1} />
            <pointLight position={[5, 5, 5]} color="#e06c55" intensity={3} />
            <pointLight position={[-5, -5, -5]} color="#c9a882" intensity={1} />

            {/* Central Crystal Cluster */}
            <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
                <Crystal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.8} speed={0.3} />
            </Float>
            <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.3}>
                <Crystal position={[2.2, 0.5, -1]} rotation={[0.5, 0.3, 0.1]} scale={0.9} speed={0.5} />
            </Float>
            <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.7}>
                <Crystal position={[-2, -0.5, -0.5]} rotation={[-0.3, 0.6, 0.2]} scale={0.7} speed={0.4} />
            </Float>
            <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.4}>
                <Crystal position={[1, -1.8, 1]} rotation={[0.2, -0.5, 0.3]} scale={0.5} speed={0.6} />
            </Float>
            <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.6}>
                <Crystal position={[-1.5, 1.5, 0.5]} rotation={[0.4, 0.1, -0.2]} scale={0.6} speed={0.35} />
            </Float>

            {/* Orbiting Rings */}
            <OrbitRing radius={3.5} speed={0.15} thickness={0.015} />
            <OrbitRing radius={5} speed={-0.1} thickness={0.008} />

            {/* Particles */}
            <ParticleField count={600} />

            {/* Post Processing */}
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.9}
                    intensity={1.5}
                    mipmapBlur
                />
                <Vignette eskil={false} offset={0.1} darkness={0.6} />
            </EffectComposer>
        </>
    );
};

// ── Main Canvas Export ──────────────────────────────────────────────────────
const HeroCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%' }}
        >
            <PerformanceMonitor factor={0.5}>
                <HeroScene />
            </PerformanceMonitor>
        </Canvas>
    );
};

export default HeroCanvas;

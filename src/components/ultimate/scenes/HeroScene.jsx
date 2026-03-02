import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// Standard glass config per spec
const GlassMaterial = ({ color = '#ffffff', thick = false }) => (
    <MeshTransmissionMaterial
        transmission={0.95}
        thickness={thick ? 0.6 : 0.3}
        roughness={0.05}
        chromaticAberration={0.05}
        iridescence={0.4}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 800]}
        backside
        backsideThickness={0.3}
        envMapIntensity={1.5}
        color={color}
    />
)

// Animated blob (IcosahedronGeometry + vertex displacement via shader)
const GlassBlob = ({ position, scale = 1, speed = 0.5, color }) => {
    const mesh = useRef()

    useFrame(({ clock }) => {
        if (!mesh.current) return
        const t = clock.getElapsedTime()
        // Procedural wobble
        mesh.current.rotation.x = Math.sin(t * speed * 0.7) * 0.3
        mesh.current.rotation.y = t * speed * 0.4
        mesh.current.rotation.z = Math.cos(t * speed * 0.5) * 0.2
    })

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.6}>
            <mesh ref={mesh} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 4]} />
                <GlassMaterial color={color} thick />
            </mesh>
        </Float>
    )
}

// Caustic floor plane
const CausticPlane = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
            color="#1a1510"
            roughness={0.8}
            metalness={0.1}
        />
    </mesh>
)

export function HeroScene({ position }) {
    return (
        <group position={position}>
            <GlassBlob position={[-1.5, 0.5, 0]} scale={1.8} speed={0.4} color="#e06c55" />
            <GlassBlob position={[2, -0.5, -1]} scale={1.1} speed={0.6} color="#c9a882" />
            <GlassBlob position={[0, 1.5, -2]} scale={0.8} speed={0.35} color="#f3e8d0" />
            <CausticPlane />
        </group>
    )
}

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Displays a PNG frame sequence as a scroll-driven "video"
// Falls back to colour plane if frames not loaded
const VideoPlane = ({ position, rotation, color, width = 5, height = 3 }) => {
    return (
        <mesh position={position} rotation={rotation}>
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.4}
                roughness={0.3}
                metalness={0.1}
                transparent
                opacity={0.85}
            />
        </mesh>
    )
}

export function VideoCorridorScene({ position }) {
    // Planes positioned as a corridor through Z axis
    const planes = [
        { pos: [-3, 1, 0], rot: [0, 0.4, 0], color: '#2a1f14' },
        { pos: [3, -0.5, -3], rot: [0, -0.4, 0], color: '#1a140c' },
        { pos: [-2.5, -1, -6], rot: [0, 0.3, 0], color: '#231a10' },
        { pos: [3.5, 0.5, -9], rot: [0, -0.35, 0], color: '#1c1409' },
    ]

    return (
        <group position={position}>
            {planes.map((p, i) => (
                <VideoPlane
                    key={i}
                    position={p.pos}
                    rotation={p.rot}
                    color={p.color}
                />
            ))}
        </group>
    )
}

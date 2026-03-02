import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 200

export function Particles() {
    const mesh = useRef()

    const { positions, speeds } = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3)
        const speeds = new Float32Array(PARTICLE_COUNT)
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 30
            positions[i * 3 + 1] = (Math.random() - 0.5) * 30
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50
            speeds[i] = 0.002 + Math.random() * 0.004
        }
        return { positions, speeds }
    }, [])

    const posRef = useRef(positions.slice())

    useFrame(() => {
        if (!mesh.current) return
        const attr = mesh.current.geometry.attributes.position
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            posRef.current[i * 3 + 1] += speeds[i]
            if (posRef.current[i * 3 + 1] > 15) posRef.current[i * 3 + 1] = -15
        }
        attr.array.set(posRef.current)
        attr.needsUpdate = true
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={PARTICLE_COUNT}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#f3e8d0"
                transparent
                opacity={0.35}
                sizeAttenuation
            />
        </points>
    )
}

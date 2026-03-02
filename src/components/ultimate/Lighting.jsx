import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Lighting() {
    const cursorLight = useRef()

    useFrame(({ mouse, viewport }) => {
        if (!cursorLight.current) return
        cursorLight.current.position.x = (mouse.x * viewport.width) / 2
        cursorLight.current.position.y = (mouse.y * viewport.height) / 2
    })

    return (
        <>
            <ambientLight intensity={0.15} color="#f3e8d0" />
            <directionalLight
                position={[5, 8, 5]}
                intensity={1.2}
                color="#ffffff"
                castShadow
            />
            <pointLight
                position={[0, 5, 5]}
                color="#e06c55"
                intensity={2}
            />
            <pointLight
                position={[-8, -4, -8]}
                color="#c9a882"
                intensity={0.8}
            />
            {/* Cursor-tracking fill light */}
            <pointLight
                ref={cursorLight}
                position={[0, 0, 6]}
                color="#f3e8d0"
                intensity={0.6}
                distance={12}
            />
        </>
    )
}

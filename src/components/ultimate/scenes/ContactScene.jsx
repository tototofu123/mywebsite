import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'

const JewelSphere = () => {
    const mesh = useRef()
    useFrame(({ clock }) => {
        if (!mesh.current) return
        mesh.current.rotation.y = clock.getElapsedTime() * 0.15
        mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1
    })

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[1.2, 4]} />
            <MeshTransmissionMaterial
                transmission={0.98}
                thickness={0.4}
                roughness={0}
                chromaticAberration={0.08}
                iridescence={1}
                iridescenceIOR={1.5}
                iridescenceThicknessRange={[100, 1000]}
                backside
                backsideThickness={0.4}
                envMapIntensity={3}
            />
        </mesh>
    )
}

const CausticStrong = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial
            color="#12100d"
            roughness={0.9}
        />
    </mesh>
)

export function ContactScene({ position }) {
    return (
        <group position={position}>
            <JewelSphere />
            <CausticStrong />
            <pointLight position={[0, 3, 3]} color="#e06c55" intensity={4} />
            <pointLight position={[-3, -1, 2]} color="#c9a882" intensity={2} />
        </group>
    )
}

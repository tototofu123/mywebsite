import { Canvas } from '@react-three/fiber'
import { Environment, PerformanceMonitor } from '@react-three/drei'
import { Suspense } from 'react'
import { CameraRig } from './CameraRig'
import { SceneFog } from './SceneFog'
import { Lighting } from './Lighting'
import { Particles } from './Particles'
import { PostProcessing } from './PostProcessing'
import { HeroScene } from './scenes/HeroScene'
import { AboutScene } from './scenes/AboutScene'
import { ProjectClusterScene } from './scenes/ProjectClusterScene'
import { VideoCorridorScene } from './scenes/VideoCorridorScene'
import { SkillsScene } from './scenes/SkillsScene'
import { CVScene } from './scenes/CVScene'
import { ContactScene } from './scenes/ContactScene'
import { useStore } from '../../store/useStore'

// Inner scene — must live inside Canvas
function WorldScene() {
    const setDpr = useStore((s) => s.setDpr)

    return (
        <PerformanceMonitor
            onDecline={() => setDpr(1)}
            onIncline={() => setDpr(Math.min(window.devicePixelRatio, 2))}
        >
            <Suspense fallback={null}>
                <CameraRig />
                <SceneFog />
                <Lighting />
                <Particles />
                <Environment preset="night" />

                <HeroScene position={[0, 0, 12]} />
                <AboutScene position={[0, 0, 2]} />
                <ProjectClusterScene position={[0, 0, -8]} />
                <VideoCorridorScene position={[0, 0, -14]} />
                <SkillsScene position={[0, 0, -26]} />
                <CVScene position={[0, 0, -32]} />
                <ContactScene position={[0, 0, -38]} />

                <PostProcessing />
            </Suspense>
        </PerformanceMonitor>
    )
}

export function World() {
    const dpr = useStore((s) => s.dpr)

    return (
        <Canvas
            dpr={dpr}
            camera={{ position: [0, 0, 20], fov: 50 }}
            gl={{ antialias: true, alpha: false, toneMapping: 4 }}
            style={{ width: '100%', height: '100%' }}
        >
            <WorldScene />
        </Canvas>
    )
}

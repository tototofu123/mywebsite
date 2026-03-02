import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { portfolioData } from '../../../data/portfolio_data'

const { projects } = portfolioData

const CAT_COLOR = {
    'Robotics & Embedded Systems': '#e06c55',
    'AI-Augmented Development': '#c9a882',
    'Deep Learning & Game Intelligence': '#a07060',
    'AI Agents & Automation': '#d4956c',
}

// 6-card cluster layout: [x, y, z, rotY]
const CARD_LAYOUT = [
    [-2.2, 1.2, 0.5, 0.25],
    [2.0, 1.5, -0.5, -0.2],
    [-2.5, -0.8, 0.2, 0.18],
    [2.4, -0.6, 0.3, -0.22],
    [-0.4, -1.8, 1.0, 0.05],
    [0.6, 0.3, -1.2, -0.1],
]

function GlassCard({ project, position, rotY, floatOffset }) {
    const meshRef = useRef()
    const color = CAT_COLOR[project.category] || '#e06c55'

    return (
        <Float speed={0.6 + floatOffset * 0.3} floatIntensity={0.15} rotationIntensity={0.05}>
            <group position={position} rotation={[0, rotY, 0]}>
                {/* Glass plane */}
                <mesh ref={meshRef} castShadow>
                    <planeGeometry args={[1.6, 2.2]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        resolution={128}
                        transmission={0.88}
                        roughness={0.05}
                        thickness={0.08}
                        ior={1.5}
                        chromaticAberration={0.02}
                        color="#d0c8b0"
                    />
                </mesh>

                {/* Edge glow strip */}
                <mesh position={[0, 1.1, 0.01]}>
                    <planeGeometry args={[1.6, 0.01]} />
                    <meshBasicMaterial color={color} transparent opacity={0.6} />
                </mesh>

                {/* HTML content attached to the card */}
                <Html
                    center
                    occlude={false}
                    distanceFactor={4}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                >
                    <div style={{
                        width: '160px',
                        padding: '12px',
                        fontFamily: 'system-ui, sans-serif',
                        color: 'rgba(255,255,255,0.85)',
                    }}>
                        <div style={{
                            fontSize: '7px', textTransform: 'uppercase',
                            letterSpacing: '0.2em', color, marginBottom: '6px'
                        }}>
                            {project.category}
                        </div>
                        <div style={{
                            fontSize: '11px', fontWeight: 500, fontFamily: 'Georgia, serif',
                            lineHeight: 1.3, marginBottom: '5px', color: '#f0ebe0'
                        }}>
                            {project.title}
                        </div>
                        <div style={{
                            fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.12em',
                            color: 'rgba(255,255,255,0.3)', marginBottom: '8px'
                        }}>
                            {project.role}
                        </div>
                        {project.achievements.slice(0, 3).map((a, i) => (
                            <div key={i} style={{
                                fontSize: '8px', color: 'rgba(255,255,255,0.4)',
                                lineHeight: 1.5, marginBottom: '3px',
                                paddingLeft: '6px', borderLeft: `1px solid ${color}40`
                            }}>
                                {a.length > 80 ? a.slice(0, 78) + '…' : a}
                            </div>
                        ))}
                    </div>
                </Html>
            </group>
        </Float>
    )
}

export function ProjectClusterScene({ position }) {
    return (
        <group position={position}>
            {projects.slice(0, 6).map((project, i) => {
                const [x, y, z, rotY] = CARD_LAYOUT[i]
                return (
                    <GlassCard
                        key={project.id}
                        project={project}
                        position={[x, y, z]}
                        rotY={rotY}
                        floatOffset={i}
                    />
                )
            })}
        </group>
    )
}

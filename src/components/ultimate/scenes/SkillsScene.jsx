import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { portfolioData } from '../../../data/portfolio_data'

const { skills } = portfolioData

const SKILL_GROUPS = Object.entries(skills || {})

// Split skills into two panels
const panel1Groups = SKILL_GROUPS.slice(0, 3)  // programming, ai, workflows
const panel2Groups = SKILL_GROUPS.slice(3)     // engineering, climbing

function SkillPanel({ groups, position, rotY = 0 }) {
    return (
        <Float speed={0.5} floatIntensity={0.08} rotationIntensity={0.03}>
            <group position={position} rotation={[0, rotY, 0]}>
                {/* Glass card */}
                <mesh>
                    <boxGeometry args={[2.8, 3.2, 0.06]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        resolution={128}
                        transmission={0.85}
                        roughness={0.06}
                        thickness={0.06}
                        ior={1.45}
                        color="#c8b898"
                    />
                </mesh>

                {/* HTML skill content on card face */}
                <Html center occlude={false} distanceFactor={5} style={{ userSelect: 'none', pointerEvents: 'none' }}>
                    <div style={{ width: '200px', fontFamily: 'system-ui, sans-serif', padding: '4px' }}>
                        {groups.map(([group, items]) => (
                            <div key={group} style={{ marginBottom: '10px' }}>
                                <div style={{
                                    fontSize: '7px', textTransform: 'uppercase',
                                    letterSpacing: '0.25em', color: '#c9a882', marginBottom: '5px'
                                }}>
                                    {group}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                    {(Array.isArray(items) ? items : []).map((skill) => (
                                        <span key={skill} style={{
                                            fontSize: '8px', textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.7)',
                                            padding: '2px 6px', borderRadius: '1px',
                                            background: 'rgba(255,255,255,0.03)',
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Html>
            </group>
        </Float>
    )
}

function RollingBar({ position }) {
    const allSkills = Object.values(skills || {}).flat()
    const text = allSkills.join('  ·  ')

    return (
        <group position={position}>
            {/* Thin rectangle for rolling bar */}
            <mesh>
                <boxGeometry args={[6, 0.32, 0.04]} />
                <meshStandardMaterial color="#0a0804" transparent opacity={0.6} />
            </mesh>
            {/* Edge highlight */}
            <mesh position={[0, 0.16, 0.02]}>
                <planeGeometry args={[6, 0.006]} />
                <meshBasicMaterial color="#c9a882" transparent opacity={0.5} />
            </mesh>

            <Html center occlude={false} distanceFactor={6} style={{ userSelect: 'none', pointerEvents: 'none' }}>
                <div style={{
                    width: '520px', overflow: 'hidden', whiteSpace: 'nowrap',
                    fontFamily: 'system-ui, sans-serif',
                }}>
                    <div style={{
                        display: 'inline-block',
                        animation: 'marquee 18s linear infinite',
                        fontSize: '8px', textTransform: 'uppercase',
                        letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
                    }}>
                        {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
                    </div>
                    <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
                </div>
            </Html>
        </group>
    )
}

export function SkillsScene({ position }) {
    return (
        <group position={position}>
            {/* Two glass skill panels */}
            <SkillPanel groups={panel1Groups} position={[-1.7, 0, 0]} rotY={0.12} />
            <SkillPanel groups={panel2Groups} position={[1.7, 0, 0]} rotY={-0.12} />

            {/* Thin rolling bar below panels */}
            <RollingBar position={[0, -2.0, 0]} />
        </group>
    )
}

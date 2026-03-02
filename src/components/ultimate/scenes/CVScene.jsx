import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { cvVariants } from '../../../data/portfolio_data'

const VARIANTS = [
    { key: 'aiml', label: 'AI / ML' },
    { key: 'swe', label: 'SWE' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'pm', label: 'PM' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'bd', label: 'Biz Dev' },
]

function CVPanel() {
    const [selected, setSelected] = useState('aiml')
    const variant = cvVariants?.[selected]

    const handleDownload = () => {
        // Opens the light-mode embedded CV page in a new tab
        window.open(`/?mode=light#cv-${selected}`, '_blank')
    }

    return (
        <div style={{
            width: '240px',
            fontFamily: 'system-ui, sans-serif',
            color: 'rgba(255,255,255,0.85)',
            padding: '4px',
            userSelect: 'none',
        }}>
            <div style={{ fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#c9a882', marginBottom: '8px' }}>
                CV / Résumé
            </div>
            <div style={{ fontSize: '14px', fontFamily: 'Georgia, serif', color: '#f0ebe0', marginBottom: '6px' }}>
                Tailored for your role
            </div>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '12px', minHeight: '40px' }}>
                {variant?.summary || ''}
            </div>

            {/* 2×3 variant grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '10px' }}>
                {VARIANTS.map(({ key, label }) => (
                    <button key={key} onClick={() => setSelected(key)} style={{
                        background: selected === key ? 'rgba(201,168,130,0.15)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${selected === key ? '#c9a882' : 'rgba(255,255,255,0.12)'}`,
                        color: selected === key ? '#c9a882' : 'rgba(255,255,255,0.4)',
                        fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.15em',
                        padding: '5px 4px', cursor: 'pointer', borderRadius: '1px',
                        transition: 'all 0.2s',
                    }}>
                        {label}
                    </button>
                ))}
            </div>

            <button onClick={handleDownload} style={{
                width: '100%', background: '#c9a882', color: '#0a0804',
                border: 'none', fontSize: '8px', textTransform: 'uppercase',
                letterSpacing: '0.2em', padding: '8px 4px', cursor: 'pointer',
                borderRadius: '1px', fontWeight: 600,
            }}>
                DOWNLOAD ↓
            </button>
        </div>
    )
}

export function CVScene({ position }) {
    return (
        <group position={position}>
            {/* Main portrait glass rectangle — the orange/terra panel */}
            <Float speed={0.4} floatIntensity={0.06} rotationIntensity={0.02}>
                <group>
                    <mesh position={[0, 0.3, 0]}>
                        <boxGeometry args={[2.6, 4.2, 0.08]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            resolution={128}
                            transmission={0.6}
                            roughness={0.1}
                            thickness={0.25}
                            ior={1.5}
                            color="#8b4a2a"
                            emissive="#5a2810"
                            emissiveIntensity={0.3}
                        />
                    </mesh>

                    {/* Top edge glow */}
                    <mesh position={[0, 2.4, 0.04]}>
                        <planeGeometry args={[2.6, 0.008]} />
                        <meshBasicMaterial color="#e07a45" transparent opacity={0.8} />
                    </mesh>

                    {/* Edge glow ring */}
                    <mesh position={[0, 0.3, -0.1]} rotation={[0, 0, 0]}>
                        <torusGeometry args={[2.1, 0.03, 8, 80]} />
                        <meshBasicMaterial color="#c9603a" transparent opacity={0.6} />
                    </mesh>

                    {/* CV content HTML overlay — inside the orange panel */}
                    <Html
                        center
                        occlude={false}
                        distanceFactor={4.5}
                        position={[0, 0.3, 0.1]}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <CVPanel />
                    </Html>
                </group>
            </Float>
        </group>
    )
}

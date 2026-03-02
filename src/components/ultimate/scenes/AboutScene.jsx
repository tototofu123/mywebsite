import { Html, MeshTransmissionMaterial, Float } from '@react-three/drei'
import { portfolioData } from '../../../data/portfolio_data'

const { projects } = portfolioData

const CAT_COLOR = {
    'Robotics & Embedded Systems': '#e06c55',
    'AI-Augmented Development': '#c9a882',
    'Deep Learning & Game Intelligence': '#a07060',
    'AI Agents & Automation': '#d4956c',
}

// Right-side project panels — show project previews
const PROJECT_PANELS = [
    { proj: projects[0], position: [3.2, 1.2, -0.5], rotation: [0, -0.25, 0], w: 3, h: 2.8 },
    { proj: projects[1], position: [3.4, -1.6, -1.2], rotation: [0, -0.18, 0], w: 2.8, h: 2.2 },
    { proj: projects[2], position: [5.2, 0.0, -1.8], rotation: [0, -0.3, 0], w: 2.6, h: 2.0 },
    { proj: projects[3], position: [4.0, -3.2, -0.8], rotation: [0, -0.15, 0], w: 2.8, h: 1.8 },
]

function ProjectPanel({ proj, position, rotation, w, h }) {
    const color = CAT_COLOR[proj.category] || '#c9a882'
    return (
        <Float speed={0.5 + Math.random() * 0.3} floatIntensity={0.1} rotationIntensity={0.04}>
            <group position={position} rotation={rotation}>
                <mesh>
                    <planeGeometry args={[w, h]} />
                    <MeshTransmissionMaterial
                        transmission={0.88}
                        thickness={0.1}
                        roughness={0.06}
                        chromaticAberration={0.02}
                        iridescence={0.2}
                        iridescenceIOR={1.2}
                        backside
                        color="#d0c8b0"
                    />
                </mesh>

                {/* Category stripe */}
                <mesh position={[0, h / 2, 0.01]}>
                    <planeGeometry args={[w, 0.008]} />
                    <meshBasicMaterial color={color} transparent opacity={0.7} />
                </mesh>

                <Html center occlude={false} distanceFactor={5} style={{ userSelect: 'none', pointerEvents: 'none' }}>
                    <div style={{ width: `${w * 60}px`, fontFamily: 'system-ui, sans-serif', padding: '6px' }}>
                        <div style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.25em', color, marginBottom: '5px' }}>
                            {proj.category}
                        </div>
                        <div style={{ fontSize: '11px', fontFamily: 'Georgia, serif', color: '#f0ebe0', lineHeight: 1.3, marginBottom: '4px' }}>
                            {proj.title}
                        </div>
                        <div style={{ fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: '7px' }}>
                            {proj.role}
                        </div>
                        {proj.achievements.slice(0, 3).map((a, i) => (
                            <div key={i} style={{
                                fontSize: '8px', color: 'rgba(255,255,255,0.4)',
                                lineHeight: 1.5, marginBottom: '3px',
                                paddingLeft: '6px', borderLeft: `1px solid ${color}50`,
                            }}>
                                {a.length > 90 ? a.slice(0, 88) + '…' : a}
                            </div>
                        ))}
                    </div>
                </Html>
            </group>
        </Float>
    )
}

export function AboutScene({ position }) {
    return (
        <group position={position}>
            {/* Left glass panel — background for about text */}
            <mesh position={[-3, 0, 0]} rotation={[0, 0.3, 0]}>
                <planeGeometry args={[3.5, 5]} />
                <MeshTransmissionMaterial
                    transmission={0.92}
                    thickness={0.15}
                    roughness={0.05}
                    chromaticAberration={0.03}
                    iridescence={0.3}
                    iridescenceIOR={1.3}
                    iridescenceThicknessRange={[100, 600]}
                    backside
                    envMapIntensity={1.2}
                />
            </mesh>

            {/* Right side: floating project preview panels */}
            {PROJECT_PANELS.map(({ proj, position: pos, rotation: rot, w, h }, i) => (
                <ProjectPanel key={i} proj={proj} position={pos} rotation={rot} w={w} h={h} />
            ))}

            {/* Background depth blob */}
            <mesh position={[0, 0, -3]} scale={4}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color="#1a1510" roughness={1} />
            </mesh>
        </group>
    )
}

import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'
import gsap from 'gsap'

const SCENE_FOG_DENSITIES = [
    { progress: 0, density: 0.025 },  // Hero — clear
    { progress: 0.15, density: 0.04 },   // About
    { progress: 0.35, density: 0.05 },   // Projects
    { progress: 0.58, density: 0.035 },  // Skills
    { progress: 0.72, density: 0.045 },  // CV
    { progress: 0.85, density: 0.06 },   // Contact
]

function getDensity(t) {
    for (let i = SCENE_FOG_DENSITIES.length - 1; i >= 0; i--) {
        if (t >= SCENE_FOG_DENSITIES[i].progress) return SCENE_FOG_DENSITIES[i].density
    }
    return 0.025
}

export function SceneFog() {
    const { scene } = useThree()
    const fogRef = useRef(null)

    if (!fogRef.current) {
        fogRef.current = new THREE.FogExp2('#0a0804', 0.025)
        scene.fog = fogRef.current
    }

    useFrame(() => {
        const lenis = window.__lenis
        const t = lenis ? lenis.scroll / Math.max(lenis.limit, 1) : 0
        const target = getDensity(t)
        fogRef.current.density += (target - fogRef.current.density) * 0.05
    })

    return null
}

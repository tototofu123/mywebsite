import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'

const PATH_POINTS = [
    new THREE.Vector3(0, 0, 20),   // 0  entry
    new THREE.Vector3(0, 0, 12),   // 1  Hero
    new THREE.Vector3(-1, 0, 6),   // 2  Hero → About
    new THREE.Vector3(0, 0, 2),    // 3  About
    new THREE.Vector3(-2, 0, -2),  // 4  About → Projects
    new THREE.Vector3(0, 0, -8),   // 5  Projects cluster
    new THREE.Vector3(0, 0, -14),  // 6  Video corridor
    new THREE.Vector3(0, 0, -20),  // 7  Projects slider
    new THREE.Vector3(0, 2, -26),  // 8  Skills
    new THREE.Vector3(0, 0, -32),  // 9  CV
    new THREE.Vector3(0, 0, -38),  // 10 Contact
    new THREE.Vector3(0, 0, -40),  // 11 End (slight pull-back)
]

const curve = new THREE.CatmullRomCurve3(PATH_POINTS, false, 'catmullrom', 0.5)
const _pos = new THREE.Vector3()
const _look = new THREE.Vector3()
const _camPos = new THREE.Vector3()

export function CameraRig() {
    const { camera } = useThree()
    // lastT prevents drift back to 0 if lenis briefly unavailable
    const lastT = useRef(0)

    useFrame(() => {
        const lenis = window.__lenis
        if (lenis && lenis.limit > 0) {
            lastT.current = Math.min(lenis.scroll / lenis.limit, 1)
        }

        const t = lastT.current
        curve.getPoint(t, _pos)
        curve.getPoint(Math.min(t + 0.015, 1), _look)

        // Smooth lerp so camera doesn't snap
        _camPos.lerp(_pos, 0.08)
        camera.position.copy(_camPos)
        camera.lookAt(_look)
    })

    return null
}

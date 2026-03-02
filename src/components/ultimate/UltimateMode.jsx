import { Suspense, lazy, useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SiteNav } from './ui/SiteNav'
import { HeroOverlay } from './ui/HeroOverlay'
import { AboutOverlay } from './ui/AboutOverlay'
import { ContactOverlay } from './ui/ContactOverlay'
import { MobileRedirect } from './MobileRedirect'
import { UltimateLoadingScreen } from './UltimateLoadingScreen'

// Skills/Projects/CV are now fully immersed in the 3D scene — no 2D overlays needed
const SECTIONS = [
    { id: 'hero', from: 0, to: 0.12, Component: HeroOverlay },
    { id: 'about', from: 0.12, to: 0.30, Component: AboutOverlay },
    // Projects (0.30–0.55): handled by ProjectClusterScene Html overlays
    // Skills  (0.55–0.70): handled by SkillsScene Html overlays
    // CV      (0.70–0.85): handled by CVScene Html overlays
    { id: 'contact', from: 0.85, to: 1.0, Component: ContactOverlay },
]

const World = lazy(() => import('./World').then(m => ({ default: m.World })))

function useScrollProgress() {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        let rafId
        const tick = () => {
            const lenis = window.__lenis
            if (lenis && lenis.limit > 0) {
                setProgress(lenis.scroll / lenis.limit)
            }
            rafId = requestAnimationFrame(tick)
        }
        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [])
    return progress
}

// Section visibility with smooth cross-fade
function SectionLayer({ id, from, to, progress, Component }) {
    const visible = progress >= from && progress < to
    return (
        <div
            style={{
                position: 'absolute', inset: 0,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.7s ease',
                pointerEvents: visible ? 'auto' : 'none',
            }}
        >
            <Component />
        </div>
    )
}

const UltimateMode = ({ onReset }) => {
    const progress = useScrollProgress()
    const [worldLoaded, setWorldLoaded] = useState(false)

    // Stable reference — avoids useEffect re-running every scroll tick
    const handleLoad = useCallback(() => setWorldLoaded(true), [])

    return (
        // 900vh = 9 pages. Contact ends at 100% = we can't scroll past.
        <div style={{ height: '900vh', position: 'relative', overscrollBehavior: 'none' }}>
            <MobileRedirect onRedirect={onReset} />

            {/* ── Sticky 3D canvas ─────────────────────────────────────── */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }}>
                <AnimatePresence>
                    {!worldLoaded && <UltimateLoadingScreen key="loader" />}
                </AnimatePresence>

                <Suspense fallback={null}>
                    <WorldLoaded onLoad={handleLoad} />
                </Suspense>

                {/* Scanlines overlay */}
                <div
                    style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.018,
                        backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,1) 2px,rgba(255,255,255,1) 4px)',
                    }}
                />
            </div>

            {/* ── Fixed UI layer ─────────────────────────────────────────── */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 50, pointerEvents: 'none' }}>
                <SiteNav onReset={onReset} />

                {SECTIONS.map(({ id, from, to, Component }) => (
                    <SectionLayer key={id} id={id} from={from} to={to} progress={progress} Component={Component} />
                ))}
            </div>
        </div>
    )
}

// Stable wrapper — onLoad is memoized so useEffect runs only once
function WorldLoaded({ onLoad }) {
    const ref = useRef(onLoad)
    useEffect(() => {
        const t = setTimeout(() => ref.current(), 800)
        return () => clearTimeout(t)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return <World />
}

export default UltimateMode

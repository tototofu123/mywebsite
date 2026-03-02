import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { animate } from 'framer-motion'

export function AnimatedNumber({ from = 0, to, suffix = '', duration = 1.5 }) {
    const nodeRef = useRef(null)
    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

    // Merge refs
    const setRef = (el) => {
        nodeRef.current = el
        inViewRef(el)
    }

    useEffect(() => {
        if (!inView || !nodeRef.current) return
        const controls = animate(from, to, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                if (nodeRef.current) {
                    nodeRef.current.textContent = Math.round(v) + suffix
                }
            },
        })
        return () => controls.stop()
    }, [inView, from, to, suffix, duration])

    return <span ref={setRef}>{from + suffix}</span>
}

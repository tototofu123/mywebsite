import { useEffect } from 'react'
import { useStore } from '../../store/useStore'

/**
 * Mobile redirect: on mobile/tablet (<1024px) switch to Light Mode
 * so users get a clean 2D experience.
 */
export function MobileRedirect({ onRedirect }) {
    useEffect(() => {
        const isMobile = window.innerWidth < 1024 ||
            /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)
        if (isMobile) {
            onRedirect()
        }
    }, [onRedirect])

    return null
}

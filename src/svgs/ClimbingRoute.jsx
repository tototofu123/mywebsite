// SVG 5: Climbing Route Path
// Used in the About section. Animates drawing upward on scroll entry.
// Uses IntersectionObserver via a ref to trigger the animation on scroll.
import { useEffect, useRef } from 'react';

const ClimbingRoute = ({ className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('route-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <svg
            ref={ref}
            viewBox="0 0 60 600"
            width="60"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <style>{`
                .route-path {
                    stroke-dasharray: 1;
                    stroke-dashoffset: 1;
                    pathLength: 1;
                    transition: none;
                }
                .route-visible .route-path {
                    animation: route-draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes route-draw {
                    to { stroke-dashoffset: 0; }
                }
                .route-anchor {
                    opacity: 0;
                }
                .route-visible .route-anchor { animation: anchor-fade 0.5s ease-out forwards; }
                .route-visible .ra1 { animation-delay: 0.4s; }
                .route-visible .ra2 { animation-delay: 0.9s; }
                .route-visible .ra3 { animation-delay: 1.4s; }
                .route-visible .ra4 { animation-delay: 1.9s; }
                .route-visible .ra5 { animation-delay: 2.4s; }
                @keyframes anchor-fade { to { opacity: 1; } }
            `}</style>
            <path
                className="route-path"
                d="M 30 580 C 40 540, 50 500, 35 460 C 20 420, 10 380, 25 340 C 40 300, 50 260, 35 220 C 20 180, 10 140, 25 100 C 40 60, 35 40, 30 20"
                stroke="#B8613E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                pathLength="1"
            />
            <g stroke="#B8613E" strokeWidth="1.5" fill="none">
                <circle cx="35" cy="460" r="4" className="route-anchor ra1" />
                <circle cx="25" cy="340" r="4" className="route-anchor ra2" />
                <circle cx="35" cy="220" r="4" className="route-anchor ra3" />
                <circle cx="25" cy="100" r="4" className="route-anchor ra4" />
                <circle cx="30" cy="20" r="4" className="route-anchor ra5" />
            </g>
        </svg>
    );
};

export default ClimbingRoute;

import { useEffect } from 'react';
import Lenis from 'lenis';
import Nav from '../shared/Nav';
import GrainOverlay from '../../svgs/GrainOverlay';

const LayoutLight = ({ children, onReset, onOpenCV }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-cream selection:bg-terra/20">
            {/* Paper grain texture overlay */}
            <GrainOverlay />

            <Nav onReset={onReset} onOpenCV={onOpenCV} />

            <main className="relative z-10 w-full">
                {children}
            </main>

            {/* Progress Line */}
            <div className="fixed right-0 top-0 w-px h-full bg-ink/5 z-40">
                <div className="w-full bg-terra h-1/4 origin-top scale-y-progress" />
            </div>
        </div>
    );
};

export default LayoutLight;

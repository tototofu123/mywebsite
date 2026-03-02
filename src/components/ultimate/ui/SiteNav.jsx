import { motion } from 'framer-motion'

const SECTIONS = [
    { id: 'hero', label: 'Hero', pct: 0 },
    { id: 'about', label: 'About', pct: 0.12 },
    { id: 'projects', label: 'Projects', pct: 0.28 },
    { id: 'skills', label: 'Skills', pct: 0.58 },
    { id: 'cv', label: 'CV', pct: 0.72 },
    { id: 'contact', label: 'Contact', pct: 0.85 },
]

function scrollTo(pct) {
    const lenis = window.__lenis
    if (!lenis) return
    lenis.scrollTo(pct * lenis.limit, { duration: 1.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
}

export function SiteNav({ onReset }) {
    return (
        <header className="fixed top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 50 }}>
            <div className="flex justify-between items-center px-8 md:px-10 py-6">

                {/* Wordmark */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="pointer-events-auto font-display italic text-xl text-white/80 hover:text-white transition-colors"
                    style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
                >
                    lai.codes
                </motion.a>

                {/* Nav links */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="pointer-events-auto hidden md:flex items-center gap-6"
                >
                    {SECTIONS.map(({ id, label, pct }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(pct)}
                            className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors cursor-pointer"
                            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
                        >
                            {label}
                        </button>
                    ))}
                </motion.nav>

                {/* Light Mode toggle */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    onClick={onReset}
                    className="pointer-events-auto font-sans text-[9px] uppercase tracking-widest text-white/60 hover:text-white transition-colors border border-white/20 px-4 py-2 hover:border-white/50 backdrop-blur-sm bg-black/20"
                >
                    Light ↗
                </motion.button>
            </div>
        </header>
    )
}

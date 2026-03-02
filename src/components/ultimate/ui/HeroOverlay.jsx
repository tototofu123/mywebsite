import { motion } from 'framer-motion'
import { portfolioData } from '../../../data/portfolio_data'

const { profile } = portfolioData

export function HeroOverlay({ email }) {
    return (
        <section
            id="hero"
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="font-sans text-[10px] uppercase tracking-[0.45em] text-terra mb-5"
            >
                {profile.school} · {profile.location}
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[18vw] md:text-[10rem] font-medium leading-none tracking-tighter text-cream"
            >
                {profile.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="font-display italic text-xl md:text-3xl text-cream/45 mt-4 max-w-lg"
            >
                {profile.role}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                className="flex items-center gap-6 mt-10 pointer-events-auto"
            >
                <a
                    href="#about"
                    className="font-sans text-[11px] uppercase tracking-widest text-cream/50 hover:text-cream border border-cream/15 px-6 py-3 hover:border-cream/40 hover:bg-cream/5 backdrop-blur-sm transition-all"
                >
                    Explore
                </a>
                <a
                    href={`mailto:${profile.email}`}
                    className="font-sans text-[11px] uppercase tracking-widest text-terra hover:text-terra/70 transition-colors"
                >
                    {profile.email}
                </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-cream/20">scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-cream/20 to-transparent animate-pulse" />
            </motion.div>
        </section>
    )
}

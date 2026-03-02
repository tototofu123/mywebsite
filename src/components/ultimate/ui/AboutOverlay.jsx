import { motion } from 'framer-motion'
import { portfolioData } from '../../../data/portfolio_data'
import { AnimatedNumber } from '../../ui/AnimatedNumber'

const { profile, leadership } = portfolioData
const climbing = leadership?.[0]

const Stat = ({ label, value, suffix = '' }) => (
    <div className="border-l border-cream/10 pl-4">
        <div className="font-display text-2xl md:text-3xl text-cream">
            <AnimatedNumber to={value} suffix={suffix} />
        </div>
        <div className="font-sans text-[9px] uppercase tracking-widest text-cream/30 mt-0.5">{label}</div>
    </div>
)

export function AboutOverlay() {
    return (
        <section
            id="about"
            className="absolute inset-0 flex items-center pointer-events-none px-8 md:px-16"
        >
            <div className="max-w-2xl">
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1 }}
                    className="font-sans text-[9px] uppercase tracking-[0.35em] text-terra mb-6"
                >
                    About
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="font-display text-3xl md:text-4xl text-cream leading-snug mb-8"
                >
                    A builder at the intersection of{' '}
                    <span className="italic text-terra">engineering</span> and{' '}
                    <span className="italic text-terra">intelligence</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-sans text-sm text-cream/50 leading-relaxed mb-10 max-w-prose"
                >
                    {profile.school} Computer Engineering & AI student. Currently{' '}
                    {climbing?.role} at {climbing?.organization}. I build autonomous agents,{' '}
                    embedded systems, and games — bridging low-level firmware with high-level intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="grid grid-cols-3 gap-6"
                >
                    <Stat label="Projects" value={8} suffix="+" />
                    <Stat label="Certifications" value={12} />
                    <Stat label="Members Led" value={200} suffix="+" />
                </motion.div>
            </div>
        </section>
    )
}

import { motion } from 'framer-motion'
import { portfolioData } from '../../../data/portfolio_data'
import { RollingText } from '../../ui/RollingText'

const { skills } = portfolioData

const SkillChip = ({ name, index }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
        className="inline-block font-sans text-[10px] uppercase tracking-widest text-cream/50 border border-cream/10 px-3 py-1.5 hover:border-terra/50 hover:text-terra transition-all backdrop-blur-sm cursor-default"
    >
        {name}
    </motion.span>
)

export function SkillsOverlay() {
    // Flatten all skills for marquee
    const allSkills = Object.values(skills || {}).flat()

    return (
        <section
            id="skills"
            className="absolute inset-0 flex flex-col justify-center pointer-events-none px-8 md:px-16"
        >
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8 }}
                className="font-sans text-[9px] uppercase tracking-[0.35em] text-terra mb-8"
            >
                Skills & Tools
            </motion.p>

            {/* Skill chips by group */}
            <div className="pointer-events-auto max-w-2xl mb-10">
                {skills && Object.entries(skills).map(([group, items]) => (
                    <div key={group} className="mb-5">
                        <p className="font-sans text-[8px] uppercase tracking-[0.3em] text-cream/25 mb-2">{group.replace(/_/g, ' ')}</p>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(items) && items.map((s, i) => (
                                <SkillChip key={s} name={s} index={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Rolling marquee of all skills */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, delay: 0.4 }}
                className="border-t border-b border-cream/5 py-3"
            >
                <RollingText items={allSkills} speed={30} />
            </motion.div>
        </section>
    )
}

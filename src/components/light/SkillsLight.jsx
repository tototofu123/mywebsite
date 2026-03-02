import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio_data';
import TerrainLines from '../../svgs/TerrainLines';
import BotanicalSprig from '../../svgs/BotanicalSprig';

const SkillsLight = () => {
    const { skills, certifications } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="skills" className="py-32 px-8 md:px-24 bg-cream-2/30">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* Left Column: Sticky Header */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit relative">
                    {/* Topographic terrain background */}
                    <div className="absolute -top-12 -left-8 -right-8 pointer-events-none opacity-60 overflow-hidden">
                        <TerrainLines className="w-full h-auto" />
                    </div>

                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-3">Competencies</span>
                        <BotanicalSprig />
                    </div>
                    <h2 className="text-6xl font-display font-medium mb-8 leading-tight">
                        Technical <br /> <span className="italic font-light">Stack</span>
                    </h2>
                    <p className="font-sans text-sm text-ink-3 max-w-xs leading-relaxed">
                        Bridging the gap between conceptual AI research and robust engineering implementation.
                    </p>
                </div>

                {/* Right Column: Skill Groups */}
                <div className="lg:w-2/3 space-y-24">
                    {/* Programming & AI */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-terra mb-8 border-b border-terra/20 pb-2">Programming</h3>
                            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
                                {skills.programming.map(skill => (
                                    <motion.span key={skill} variants={item} className="px-4 py-2 bg-white border border-ink/5 rounded-sm font-sans text-sm text-ink-2">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-terra mb-8 border-b border-terra/20 pb-2">AI & Agents</h3>
                            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
                                {skills.ai.map(skill => (
                                    <motion.span key={skill} variants={item} className="px-4 py-2 bg-white border border-ink/5 rounded-sm font-sans text-sm text-ink-2">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Workflows & Engineering */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-terra mb-8 border-b border-terra/20 pb-2">Workflows</h3>
                            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
                                {skills.workflows.map(skill => (
                                    <motion.span key={skill} variants={item} className="px-4 py-2 bg-white border border-ink/5 rounded-sm font-sans text-sm text-ink-2">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-terra mb-8 border-b border-terra/20 pb-2">Engineering</h3>
                            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
                                {skills.engineering.map(skill => (
                                    <motion.span key={skill} variants={item} className="px-4 py-2 bg-white border border-ink/5 rounded-sm font-sans text-sm text-ink-2">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Certifications (Special Layout) */}
                    <div className="pt-12 border-t border-ink/5">
                        <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-10">Professional Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {[...certifications.ai, ...certifications.web].map((cert, i) => (
                                <div key={i} className="flex gap-4 items-start py-2 border-b border-ink/[0.03]">
                                    <span className="font-display italic text-terra text-sm mt-1">{String(i + 1).padStart(2, '0')}</span>
                                    <p className="font-sans text-xs text-ink-2 leading-relaxed">{cert}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Section Number */}
            <div className="absolute right-8 bottom-24 hidden md:block">
                <span className="font-display italic text-6xl text-ink md:opacity-5">04</span>
            </div>
        </section>
    );
};

export default SkillsLight;

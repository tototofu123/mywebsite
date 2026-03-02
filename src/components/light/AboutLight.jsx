import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio_data';
import ClimbingRoute from '../../svgs/ClimbingRoute';

const AboutLight = () => {
    const { expectedGraduation, coursework, strengths } = portfolioData.education[0];
    const { leadership } = portfolioData;

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="about" className="py-32 px-8 md:px-24 bg-cream-2/50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-ink/[0.02] -skew-x-12 translate-x-1/2" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-start relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:w-1/2"
                >
                    <motion.h2 variants={item} className="font-display italic text-4xl mb-8 text-terra">
                        About & Education
                    </motion.h2>

                    <motion.div variants={item} className="space-y-6">
                        <p className="font-display text-3xl leading-snug text-ink-2">
                            Currently pursuing a BEng in Computer Engineering and AI at HKUST (Expected {expectedGraduation}).
                        </p>
                        <p className="font-sans text-ink-3 leading-relaxed">
                            My core strengths lie in {strengths} I bridge the gap between high-level AI research and practical, embedded implementation.
                        </p>
                    </motion.div>

                    {/* Climbing Route — animates on scroll into view */}
                    <motion.div variants={item} className="mt-10 flex items-center gap-4">
                        <ClimbingRoute className="shrink-0 h-40" style={{ height: '10rem', width: 'auto' }} />
                        <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-ink-3 writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>The climb</span>
                    </motion.div>

                    <motion.div variants={item} className="mt-12 flex flex-wrap gap-3">
                        {coursework.map((course, i) => (
                            <span key={i} className="px-4 py-1 border border-ink/10 rounded-full font-sans text-xs text-ink-3 uppercase tracking-wider bg-white">
                                {course}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:w-1/2 mt-12 md:mt-0"
                >
                    <motion.h3 variants={item} className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-3 mb-10 border-b border-ink/10 pb-4">
                        Leadership & Impact
                    </motion.h3>

                    <div className="space-y-12">
                        {leadership.map((pos, i) => (
                            <motion.div key={i} variants={item} className="group">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h4 className="font-display text-2xl group-hover:text-terra transition-colors">{pos.role}</h4>
                                    <span className="font-sans text-[10px] text-ink-3">{pos.period}</span>
                                </div>
                                <p className="font-sans text-sm text-ink-2 italic mb-4">{pos.organization}</p>
                                <ul className="space-y-2">
                                    {pos.details.map((detail, j) => (
                                        <li key={j} className="font-sans text-sm text-ink-3 flex gap-3">
                                            <span className="text-terra mt-1.5 w-1 h-1 rounded-full flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating Section Number */}
            <div className="absolute right-8 bottom-24 hidden md:block rotate-90 origin-right">
                <span className="font-display italic text-6xl text-ink opacity-5">02</span>
            </div>
        </section>
    );
};

export default AboutLight;

import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio_data';

const ProjectsLight = () => {
    const { projects } = portfolioData;

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
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="projects" className="py-32 px-8 md:px-24 bg-cream">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-3 mb-4 block">Selected Works</span>
                        <h2 className="text-6xl font-display font-medium tracking-tight">
                            Engineering <span className="italic font-light">&</span> Prototyping
                        </h2>
                    </div>
                    <p className="max-w-xs font-sans text-sm text-ink-3 leading-relaxed">
                        A curation of projects across Robotics, AI, and Full-Stack development.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className={`group relative bg-white border border-ink/5 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:shadow-terra/5 ${i % 3 === 1 ? 'md:translate-y-12' : ''}`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-terra group-hover:h-full transition-all duration-500 ease-[0.22,1,0.36,1] z-0" />

                            <div className="relative z-10">
                                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-3 group-hover:text-white/60 transition-colors mb-4 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-display mb-6 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <ul className="space-y-3">
                                    {project.achievements.map((ach, j) => (
                                        <li key={j} className="font-sans text-xs text-ink-3 group-hover:text-white/80 transition-colors flex gap-2">
                                            <span className="text-terra group-hover:text-white mt-1 shrink-0">•</span>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative z-10 mt-12 flex justify-between items-end">
                                <span className="font-display italic text-lg text-ink-2 group-hover:text-white/90 transition-colors">
                                    {project.role}
                                </span>
                                <div className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                    <svg className="w-3 h-3 text-ink group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Floating Section Number */}
            <div className="absolute left-8 bottom-24 hidden md:block">
                <span className="font-display italic text-6xl text-ink opacity-5">03</span>
            </div>
        </section>
    );
};

export default ProjectsLight;

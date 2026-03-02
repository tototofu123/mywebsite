import { motion } from 'framer-motion'
import { portfolioData } from '../../../data/portfolio_data'

const { projects } = portfolioData

const CATEGORY_COLORS = {
    'Robotics & Embedded Systems': '#e06c55',
    'AI-Augmented Development': '#c9a882',
    'Deep Learning & Game Intelligence': '#a07060',
    'AI Agents & Automation': '#d4956c',
}

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7, delay: index * 0.08 }}
        className="group border border-cream/10 p-5 hover:border-cream/25 transition-colors backdrop-blur-sm bg-ink/30 cursor-pointer"
    >
        <div
            className="font-sans text-[9px] uppercase tracking-[0.25em] mb-3"
            style={{ color: CATEGORY_COLORS[project.category] || '#e06c55' }}
        >
            {project.category}
        </div>
        <h3 className="font-display text-lg text-cream leading-tight mb-2 group-hover:text-terra transition-colors">
            {project.title}
        </h3>
        <p className="font-sans text-[10px] text-cream/35 uppercase tracking-widest">
            {project.role}
        </p>
        <ul className="mt-3 space-y-1">
            {project.achievements.slice(0, 1).map((a, i) => (
                <li key={i} className="font-sans text-[11px] text-cream/40 leading-relaxed">
                    {a}
                </li>
            ))}
        </ul>
    </motion.div>
)

export function ProjectsOverlay() {
    return (
        <section
            id="projects"
            className="absolute inset-0 flex flex-col justify-center pointer-events-none px-8 md:px-16"
        >
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8 }}
                className="font-sans text-[9px] uppercase tracking-[0.35em] text-terra mb-6"
            >
                Projects
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pointer-events-auto max-w-5xl">
                {projects.slice(0, 6).map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </section>
    )
}

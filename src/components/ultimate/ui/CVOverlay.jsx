import { motion } from 'framer-motion'
import { useState } from 'react'
import { cvVariants } from '../../../data/portfolio_data'

const VARIANTS = [
    { key: 'aiml', label: 'AI / ML Engineer' },
    { key: 'swe', label: 'Software Engineer' },
    { key: 'robotics', label: 'Robotics / Embedded' },
    { key: 'pm', label: 'Product Manager' },
    { key: 'frontend', label: 'Frontend Designer' },
    { key: 'bd', label: 'Business Dev' },
]

export function CVOverlay() {
    const [selected, setSelected] = useState('aiml')
    const variant = cvVariants?.[selected]

    const handleDownload = () => {
        window.open(`/cv?variant=${selected}`, '_blank')
    }

    return (
        <section
            id="cv"
            className="absolute inset-0 flex items-center justify-end pointer-events-none px-8 md:px-16"
        >
            <div className="max-w-sm w-full">
                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8 }}
                    className="font-sans text-[9px] uppercase tracking-[0.35em] text-terra mb-6"
                >
                    CV / Résumé
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-display text-2xl text-cream mb-2"
                >
                    Tailored for your role
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans text-[11px] text-cream/40 mb-6 leading-relaxed min-h-[3em]"
                >
                    {variant?.summary || ''}
                </motion.p>

                {/* Variant picker */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 gap-2 mb-5 pointer-events-auto"
                >
                    {VARIANTS.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setSelected(key)}
                            className={`text-left font-sans text-[10px] uppercase tracking-widest px-3 py-2.5 border transition-all ${selected === key
                                    ? 'border-terra text-terra bg-terra/8'
                                    : 'border-cream/10 text-cream/35 hover:border-cream/25 hover:text-cream/60'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    onClick={handleDownload}
                    className="pointer-events-auto w-full font-sans text-[11px] uppercase tracking-widest bg-terra text-ink py-4 hover:bg-terra/80 transition-colors"
                >
                    Download as {variant?.title || 'CV'} ↓
                </motion.button>
            </div>
        </section>
    )
}

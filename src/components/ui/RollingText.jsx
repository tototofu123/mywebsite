import { motion } from 'framer-motion'

/**
 * Infinite left-scrolling marquee strip.
 * items: string[]
 * speed: pixels per second (default 40)
 */
export function RollingText({ items = [], speed = 40, separator = '·' }) {
    const duration = (items.length * 120) / speed

    // Duplicate items to create seamless loop
    const repeated = [...items, ...items]

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration, ease: 'linear' }}
                className="inline-flex gap-8"
            >
                {repeated.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-8">
                        <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-cream/40">
                            {item}
                        </span>
                        <span className="text-terra/40 text-xs">{separator}</span>
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

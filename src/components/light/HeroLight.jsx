import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio_data';
import SignatureUnderline from '../../svgs/SignatureUnderline';

const HeroLight = () => {
    const { name, role, school, location } = portfolioData.profile;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-5xl"
            >
                <motion.p variants={item} className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-3 mb-8">
                    {school} — {location}
                </motion.p>

                <div className="relative mb-12">
                    <motion.h1
                        variants={item}
                        className="text-8xl md:text-[12rem] font-display font-medium leading-[0.85] tracking-tighter"
                    >
                        {name.split('').map((char, i) => (
                            <span key={i} className="inline-block">{char}</span>
                        ))}
                        <span className="text-terra">.</span>
                    </motion.h1>

                    {/* Animated signature underline */}
                    <motion.div variants={item} className="mt-2 overflow-hidden">
                        <SignatureUnderline className="w-full max-w-2xl opacity-70" />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="md:absolute md:top-1/2 md:-right-12 md:-translate-y-1/2 mt-8 md:mt-0 max-w-xs"
                    >
                        <p className="font-display italic text-3xl md:text-4xl text-ink-2 leading-tight">
                            {role}
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={item} className="flex gap-8 items-center mt-12 pb-24 border-b border-ink/5">
                    <div className="flex flex-col gap-1">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-ink-3">Current Focus</span>
                        <span className="font-sans text-sm text-ink-2">AI Architectures & Robotics</span>
                    </div>

                    <div className="h-8 w-px bg-ink/10" />

                    <div className="flex flex-col gap-1">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-ink-3">Availability</span>
                        <span className="font-sans text-sm text-ink-2">Open for Projects 2026</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Section Number */}
            <div className="absolute left-8 bottom-24 hidden md:block">
                <span className="font-display italic text-6xl text-ink md:opacity-5">01</span>
            </div>
        </section>
    );
};

export default HeroLight;

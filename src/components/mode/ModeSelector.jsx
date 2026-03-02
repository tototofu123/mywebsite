import { motion } from 'framer-motion';

const ModeSelector = ({ onSelect }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row bg-cream overflow-hidden">
            {/* Ultimate Mode Side */}
            <motion.div
                className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-ink/5"
                whileHover="hover"
                onClick={() => onSelect('ultimate')}
            >
                <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-5 transition-opacity duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                        variants={{
                            hover: { scale: 1.05, rotate: 2 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 w-24 h-24 rounded-full border border-ink/10 flex items-center justify-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-ink/5 animate-pulse" />
                    </motion.div>

                    <h2 className="text-4xl font-display italic mb-4">Ultimate</h2>
                    <p className="max-w-xs font-sans text-ink-3 text-sm leading-relaxed">
                        A high-fidelity immersive 3D world. Best on desktop with a dedicated GPU.
                    </p>

                    <div className="mt-8 px-6 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest group-hover:bg-ink group-hover:text-white transition-colors">
                        Enter Experience
                    </div>
                </div>
            </motion.div>

            {/* Light Mode Side */}
            <motion.div
                className="relative flex-1 group cursor-pointer overflow-hidden"
                whileHover="hover"
                onClick={() => onSelect('light')}
            >
                <div className="absolute inset-0 bg-terra opacity-0 group-hover:opacity-5 transition-opacity duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                        variants={{
                            hover: { scale: 0.95 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 w-24 h-24 rounded-sm border border-ink/10 flex items-center justify-center"
                    >
                        <div className="w-12 h-16 border border-ink/20 rotate-3" />
                    </motion.div>

                    <h2 className="text-4xl font-display mb-4">Light</h2>
                    <p className="max-w-xs font-sans text-ink-3 text-sm leading-relaxed">
                        Minimal, fast, and elegant. A editorial-focused parchment experience.
                    </p>

                    <div className="mt-8 px-6 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest group-hover:bg-terra group-hover:text-white group-hover:border-terra transition-colors font-medium">
                        View Portfolio
                    </div>
                </div>
            </motion.div>

            {/* Center Divider/Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cream border border-ink/10 rounded-full hidden md:flex items-center justify-center z-10">
                <span className="font-display text-xl font-bold">L</span>
            </div>
        </div>
    );
};

export default ModeSelector;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CVRenderer from './CVRenderer';
import { cvVariants } from '../../data/portfolio_data';
import '../../styles/CVStyles.css';

const CVLayout = ({ onClose }) => {
    const [activeVariant, setActiveVariant] = useState('swe');

    const handlePrint = () => {
        window.print();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cream-2 overflow-y-auto no-scrollbar print:static print:bg-white"
        >
            {/* Selection Control Bar - Hidden during print */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink/5 px-8 py-4 flex justify-between items-center no-print">
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                    {Object.keys(cvVariants).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveVariant(key)}
                            className={`whitespace-nowrap font-sans text-[10px] uppercase tracking-widest px-4 py-2 rounded-full transition-all ${activeVariant === key
                                    ? 'bg-terra text-white'
                                    : 'bg-ink/5 text-ink-3 hover:bg-ink/10'
                                }`}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={handlePrint}
                        className="group flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-ink hover:text-terra transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        Print PDF
                    </button>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center hover:bg-terra transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main CV Surface */}
            <div className="py-12 px-4 md:py-20 md:px-0">
                <div className="print:m-0">
                    <CVRenderer variant={activeVariant} />
                </div>
            </div>

            {/* Footer Info - Hidden during print */}
            <div className="max-w-xl mx-auto pb-20 text-center no-print">
                <p className="font-sans text-[10px] text-ink-3 uppercase tracking-widest opacity-50">
                    Generated via dynamic portfolio engine v1.0
                </p>
            </div>
        </motion.div>
    );
};

export default CVLayout;

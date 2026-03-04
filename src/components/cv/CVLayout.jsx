import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CVRenderer from './CVRenderer';
import { cvVariants } from '../../data/portfolio_data';
import '../../styles/CVStyles.css';

const VARIANT_TO_FILENAME = {
    aiml: 'Lai_Man_To_CV_AI-ML-Engineer',
    swe: 'Lai_Man_To_CV_Software-Engineer',
    pm: 'Lai_Man_To_CV_Product-Manager',
    robotics: 'Lai_Man_To_CV_Robotics-Embedded',
    bd: 'Lai_Man_To_CV_Business-Development',
    frontend: 'Lai_Man_To_CV_Frontend-Designer',
    climbing: 'Lai_Man_To_CV_Business-Development', // fallback
};

const CVLayout = ({ onClose }) => {
    const [activeVariant, setActiveVariant] = useState('swe');
    const [downloadOpen, setDownloadOpen] = useState(false);

    const getFileName = () => VARIANT_TO_FILENAME[activeVariant] || 'Lai_Man_To_CV_Software-Engineer';

    const handleDownload = (ext) => {
        const name = getFileName();
        const url = ext === 'md'
            ? `/${name}.md`
            : `/files/${name}.${ext}`;
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}.${ext}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDownloadOpen(false);
    };

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

                <div className="flex items-center gap-4">
                    {/* Download dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDownloadOpen(o => !o)}
                            className="group flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-ink hover:text-terra transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                            <svg className={`w-3 h-3 transition-transform ${downloadOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {downloadOpen && (
                            <div className="absolute right-0 top-full mt-2 bg-white border border-ink/10 rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]">
                                {[['pdf', 'PDF'], ['docx', 'Word (.docx)'], ['md', 'Markdown'], ['txt', 'Plain Text']].map(([ext, label]) => (
                                    <button
                                        key={ext}
                                        onClick={() => handleDownload(ext)}
                                        className="w-full text-left px-4 py-2.5 font-sans text-[10px] uppercase tracking-widest text-ink hover:bg-terra/10 hover:text-terra transition-colors"
                                    >
                                        {label}
                                    </button>
                                ))}
                                <div className="border-t border-ink/5">
                                    <button
                                        onClick={handlePrint}
                                        className="w-full text-left px-4 py-2.5 font-sans text-[10px] uppercase tracking-widest text-ink hover:bg-terra/10 hover:text-terra transition-colors"
                                    >
                                        Print / Save PDF
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

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

import { useState, useEffect } from 'react';
import LMonogram from '../../svgs/LMonogram';

const Nav = ({ onReset, onOpenCV }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference invert transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="flex items-center gap-2">
                <LMonogram className="w-6 h-6" />
                <div className="font-display italic text-2xl text-ink">lai.codes</div>
            </div>

            <div className="flex gap-8 items-center">
                <button
                    onClick={onOpenCV}
                    className="font-sans text-[10px] uppercase tracking-widest text-ink hover:text-terra transition-colors"
                >
                    Index / CV
                </button>
                <button
                    onClick={onReset}
                    className="font-sans text-[10px] uppercase tracking-widest text-ink hover:text-terra transition-colors"
                >
                    Switch Mode
                </button>
            </div>
        </nav>
    );
};

export default Nav;

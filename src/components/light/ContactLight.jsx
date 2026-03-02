import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio_data';

const ContactLight = () => {
    const { email, github, website, phone } = portfolioData.profile;

    return (
        <section id="contact" className="py-32 px-8 md:px-24 bg-ink text-cream relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20 relative z-10">
                <div className="md:w-1/2">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-6 block">Ready to talk?</span>
                    <h2 className="text-7xl font-display font-medium mb-12 leading-tight">
                        Let's build <br /> <span className="italic font-light text-terra">something</span> future-proof.
                    </h2>

                    <div className="space-y-8">
                        <a href={`mailto:${email}`} className="group block">
                            <span className="font-sans text-[10px] uppercase tracking-widest text-cream/40 mb-1 block">Email</span>
                            <span className="font-display text-3xl group-hover:text-terra transition-colors underline underline-offset-8 decoration-cream/10 group-hover:decoration-terra">
                                {email}
                            </span>
                        </a>

                        <a href="#" className="group block">
                            <span className="font-sans text-[10px] uppercase tracking-widest text-cream/40 mb-1 block">Social</span>
                            <span className="font-display text-3xl group-hover:text-terra transition-colors underline underline-offset-8 decoration-cream/10 group-hover:decoration-terra">
                                {github}
                            </span>
                        </a>
                    </div>
                </div>

                <div className="md:w-1/3 w-full bg-cream/5 backdrop-blur-sm p-8 rounded-sm border border-cream/10">
                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="font-sans text-[10px] uppercase tracking-widest text-cream/40">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-terra transition-colors font-sans text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-sans text-[10px] uppercase tracking-widest text-cream/40">Project Summary</label>
                            <textarea rows="4" className="w-full bg-transparent border-b border-cream/20 py-2 focus:outline-none focus:border-terra transition-colors font-sans text-sm resize-none" />
                        </div>
                        <button className="w-full py-4 bg-terra text-white font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-terra-light transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating Section Number */}
            <div className="absolute right-8 bottom-24 hidden md:block opacity-10">
                <span className="font-display italic text-6xl text-cream">05</span>
            </div>
        </section>
    );
};

export default ContactLight;

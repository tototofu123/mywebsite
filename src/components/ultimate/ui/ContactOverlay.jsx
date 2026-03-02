import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioData } from '../../../data/portfolio_data'

const { profile } = portfolioData

export function ContactOverlay() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // EmailJS integration placeholder — will wire up in Step 9
        console.log('Contact form submitted')
        setSent(true)
    }

    return (
        <section
            id="contact"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-8"
        >
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8 }}
                className="font-sans text-[9px] uppercase tracking-[0.35em] text-terra mb-6"
            >
                Contact
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1 }}
                className="font-display text-3xl md:text-5xl text-cream text-center mb-3"
            >
                Let's build something.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-sm text-cream/40 text-center mb-12"
            >
                Open to internships, research roles, and collaborations.
            </motion.p>

            {/* Direct links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-8 pointer-events-auto mb-10"
            >
                <a
                    href={`mailto:${profile.email}`}
                    className="font-sans text-[11px] uppercase tracking-widest text-terra hover:text-terra/70 transition-colors"
                >
                    {profile.email}
                </a>
                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[11px] uppercase tracking-widest text-cream/40 hover:text-cream transition-colors"
                >
                    LinkedIn ↗
                </a>
                <a
                    href={`https://${profile.github || 'github.com'}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[11px] uppercase tracking-widest text-cream/40 hover:text-cream transition-colors"
                >
                    GitHub ↗
                </a>
            </motion.div>

            {/* Contact form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pointer-events-auto w-full max-w-md space-y-3"
            >
                {sent ? (
                    <p className="text-center font-sans text-[11px] text-terra uppercase tracking-widest">
                        ✓ Message sent
                    </p>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/25 focus:border-terra/50 focus:outline-none transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/25 focus:border-terra/50 focus:outline-none transition-colors"
                        />
                        <textarea
                            rows={3}
                            placeholder="Message"
                            required
                            className="w-full bg-transparent border border-cream/15 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/25 focus:border-terra/50 focus:outline-none transition-colors resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-terra text-ink font-sans text-[11px] uppercase tracking-widest py-4 hover:bg-terra/80 transition-colors"
                        >
                            Send Message
                        </button>
                    </>
                )}
            </motion.form>

            {/* Footer */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-sans text-[9px] uppercase tracking-widest text-cream/15 mt-16"
            >
                © 2025 {profile.name} · {profile.website}
            </motion.p>
        </section>
    )
}

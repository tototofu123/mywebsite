import { motion, AnimatePresence } from 'framer-motion'

export function UltimateLoadingScreen({ onComplete }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
                style={{
                    position: 'fixed', inset: 0, zIndex: 200,
                    background: '#050402',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '24px',
                }}
            >
                {/* Wordmark */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'Georgia, serif', fontSize: '32px',
                        fontStyle: 'italic', color: 'rgba(255,255,255,0.7)',
                        letterSpacing: '0.02em',
                    }}
                >
                    lai.codes
                </motion.div>

                {/* Animated arc ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                    style={{
                        width: '40px', height: '40px',
                        borderRadius: '50%',
                        border: '1.5px solid transparent',
                        borderTopColor: '#c9a882',
                        borderRightColor: 'rgba(201,168,130,0.3)',
                    }}
                />

                {/* Loading label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        fontFamily: 'system-ui, sans-serif', fontSize: '9px',
                        textTransform: 'uppercase', letterSpacing: '0.35em',
                        color: 'rgba(255,255,255,0.25)',
                    }}
                >
                    Initialising 3D scene
                </motion.p>
            </motion.div>
        </AnimatePresence>
    )
}

import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useMode } from './hooks/useMode'
import ModeSelector from './components/mode/ModeSelector'
import LightModeEmbed from './components/light/LightModeEmbed'
import UltimateMode from './components/ultimate/UltimateMode'

function App() {
    const { mode, selectMode, clearMode } = useMode();

    // Check URL param — allows portfolio.html to link back to ultimate mode
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('mode') === 'ultimate') {
            selectMode('ultimate');
            // Clean the URL
            window.history.replaceState({}, '', '/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {!mode ? (
                    <ModeSelector key="selector" onSelect={selectMode} />
                ) : mode === 'light' ? (
                    <LightModeEmbed key="light" onSwitchMode={clearMode} />
                ) : (
                    <UltimateMode key="ultimate" onReset={clearMode} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default App

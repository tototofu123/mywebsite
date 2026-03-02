import { useEffect } from 'react';

const LightModeEmbed = ({ onSwitchMode }) => {
    // Listen for postMessage from portfolio.html (if loaded in future iframe context)
    useEffect(() => {
        const handleMessage = (e) => {
            if (e.data === 'switchMode' && onSwitchMode) {
                onSwitchMode();
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onSwitchMode]);

    // Redirect directly to the standalone HTML page
    // (avoids all iframe sizing/scrolling issues)
    useEffect(() => {
        window.location.href = '/portfolio.html';
    }, []);

    return null;
};

export default LightModeEmbed;

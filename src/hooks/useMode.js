import { useState, useEffect } from 'react';

export const useMode = () => {
    const [mode, setMode] = useState(() => {
        return sessionStorage.getItem('displayMode') || null;
    });

    const selectMode = (newMode) => {
        setMode(newMode);
        sessionStorage.setItem('displayMode', newMode);
    };

    const clearMode = () => {
        setMode(null);
        sessionStorage.removeItem('displayMode');
    };

    return { mode, selectMode, clearMode };
};

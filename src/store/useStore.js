import { create } from 'zustand'

export const useStore = create((set) => ({
    // Mode
    mode: null, // 'ultimate' | 'light'
    setMode: (m) => set({ mode: m }),

    // Current scroll scene
    currentScene: 'hero',
    setCurrentScene: (s) => set({ currentScene: s }),

    // Device pixel ratio (performance monitor adjusts this)
    dpr: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1,
    setDpr: (d) => set({ dpr: d }),

    // CV variant selection
    cvVariant: 'aiml',
    setCvVariant: (v) => set({ cvVariant: v }),

    // CV modal open state
    cvOpen: false,
    setCvOpen: (o) => set({ cvOpen: o }),
}))

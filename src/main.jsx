import ReactDOM from 'react-dom/client'
import Lenis from 'lenis'
import App from './App.jsx'
import './index.css'

// ── Lenis smooth scroll (global, drives all sections) ───────────────────────
const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose lenis globally so R3F ScrollControls can sync
window.__lenis = lenis

// ── NO StrictMode — breaks Framer component animations ───────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

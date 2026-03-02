// SVG 7: HUD Scanning Reticle
// Overlay on the hero 3D scene in Ultimate mode. Slowly rotates.
const HudReticle = ({ className = '' }) => (
    <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <style>{`
            @keyframes hud-spin { 100% { transform: rotate(360deg); } }
            .hud-ring { animation: hud-spin 8s linear infinite; transform-origin: 100px 100px; }
        `}</style>
        <g className="hud-ring" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" fill="none">
            <circle cx="100" cy="100" r="30" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="60" />
            <path d="M 100 35 V 45 M 100 155 V 165 M 35 100 H 45 M 155 100 H 165 M 100 40 V 20 M 100 160 V 180 M 40 100 H 20 M 160 100 H 180 M 20 40 V 20 H 40 M 180 160 V 180 H 160" />
        </g>
    </svg>
);

export default HudReticle;

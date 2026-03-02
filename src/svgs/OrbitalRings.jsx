// SVG 9: Orbital Ring Decoration
// Floats around the skills crystal in Ultimate mode. Three ellipses at different angles.
const OrbitalRings = ({ className = '' }) => (
    <svg
        viewBox="0 0 300 300"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <style>{`
            @keyframes orb-spin { 100% { transform: rotate(360deg); } }
            .orb-fast { animation: orb-spin 12s linear infinite; transform-origin: 150px 150px; }
            .orb-med  { animation: orb-spin 18s linear infinite; transform-origin: 150px 150px; }
            .orb-slow { animation: orb-spin 24s linear infinite; transform-origin: 150px 150px; }
        `}</style>
        <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" strokeDasharray="4 6" fill="none">
            <g className="orb-fast">
                <ellipse cx="150" cy="150" rx="120" ry="30" transform="rotate(0 150 150)" />
            </g>
            <g className="orb-med">
                <ellipse cx="150" cy="150" rx="120" ry="30" transform="rotate(60 150 150)" />
            </g>
            <g className="orb-slow">
                <ellipse cx="150" cy="150" rx="120" ry="30" transform="rotate(120 150 150)" />
            </g>
        </g>
    </svg>
);

export default OrbitalRings;

// SVG 10: Loading Screen Progress Arc
// Used on the Ultimate mode loading screen while R3F initialises.
const LoadingArc = ({ className = '' }) => (
    <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Loading"
    >
        <style>{`
            @keyframes arc-draw {
                0%   { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 25; }
            }
            @keyframes arc-dot-rotate {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(270deg); }
            }
            .arc-path { stroke-dasharray: 100; animation: arc-draw 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate; }
            .arc-dot  { transform-origin: 50px 50px; animation: arc-dot-rotate 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate; }
        `}</style>
        <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="#B8613E"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength="100"
            transform="rotate(-90 50 50)"
            className="arc-path"
        />
        <g className="arc-dot">
            <circle cx="50" cy="10" r="2.5" fill="#B8613E" />
        </g>
    </svg>
);

export default LoadingArc;

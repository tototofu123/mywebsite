// SVG 3: Floating Terrain Lines
// Background decoration in the Skills section. Topographic contours drift upward slowly.
const TerrainLines = ({ className = '' }) => (
    <svg
        viewBox="0 0 400 300"
        width="400"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <style>{`
            @keyframes terrain-drift {
                0%   { transform: translateY(40px); opacity: 0; }
                20%, 80% { opacity: 1; }
                100% { transform: translateY(-50px); opacity: 0; }
            }
            .terrain-anim { animation: terrain-drift 16s ease-in-out infinite; }
        `}</style>
        <g
            className="terrain-anim"
            stroke="rgba(184, 97, 62, 0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        >
            <path d="M 50 160 C 30 100, 90 40, 160 50 C 210 55, 230 80, 280 70 C 330 60, 380 120, 350 190 C 320 260, 250 280, 180 260 C 110 240, 70 220, 50 160 Z" />
            <path d="M 80 165 C 65 120, 110 75, 165 80 C 200 85, 215 105, 255 100 C 295 95, 335 140, 315 195 C 295 245, 235 255, 175 240 C 125 225, 95 210, 80 165 Z" />
            <path d="M 110 170 C 100 135, 130 105, 170 110 C 195 115, 205 130, 235 125 C 265 120, 295 155, 280 200 C 265 235, 215 240, 170 225 C 135 215, 120 205, 110 170 Z" />
            <path d="M 140 175 C 135 150, 155 130, 180 135 C 195 140, 200 150, 220 145 C 240 140, 260 165, 250 195 C 240 220, 205 220, 170 210 C 150 205, 145 195, 140 175 Z" />
            <path d="M 165 180 C 160 165, 175 155, 190 155 C 200 155, 205 165, 215 165 C 225 165, 235 180, 230 195 C 225 210, 200 205, 180 200 C 170 195, 170 190, 165 180 Z" />
            <path d="M 185 185 C 185 175, 195 170, 205 175 C 210 175, 215 180, 215 190 C 215 200, 200 200, 190 195 C 185 190, 185 190, 185 185 Z" />
        </g>
    </svg>
);

export default TerrainLines;

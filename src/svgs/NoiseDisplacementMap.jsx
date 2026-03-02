// SVG 11: Noise Displacement Map Filter
// 0x0 SVG that defines the #hologlitch filter used via R3F postprocessing or CSS filter().
// Re-exports the filter ID: 'hologlitch'
const NoiseDisplacementMap = () => (
    <svg
        viewBox="0 0 100 100"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: 'absolute' }}
    >
        <defs>
            <filter id="hologlitch" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02 0.03"
                    numOctaves="2"
                    result="noise"
                >
                    <animate
                        attributeName="baseFrequency"
                        values="0.02 0.03; 0.025 0.035; 0.02 0.03"
                        dur="6s"
                        repeatCount="indefinite"
                    />
                </feTurbulence>
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="8"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </defs>
    </svg>
);

export default NoiseDisplacementMap;

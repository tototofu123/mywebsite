// SVG 6: Paper Grain Texture Overlay
// Fixed as a body overlay via CSS. Exported as a component for use in LayoutLight.
const GrainOverlay = () => (
    <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            position: 'fixed',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0.035,
            mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
    >
        <defs>
            <filter id="grain-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
            </filter>
        </defs>
        <rect width="256" height="256" filter="url(#grain-noise)" fill="#000" />
    </svg>
);

export default GrainOverlay;

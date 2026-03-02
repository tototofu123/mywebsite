// SVG 8: Glitch Text Clip Mask
// Provides 3 clipPath slices for the RGB glitch effect on the hero title.
// Usage: wrap three copies of your heading in divs with clipPath="url(#slice-N)"
// and offset them on hover: slice-1 translateX(-4px), slice-2 0, slice-3 +3px.
const GlitchMasks = () => (
    <svg
        viewBox="0 0 100 100"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ position: 'absolute' }}
    >
        <defs>
            <clipPath id="glitch-slice-1" clipPathUnits="objectBoundingBox">
                <rect x="0" y="0" width="1" height="0.33" />
            </clipPath>
            <clipPath id="glitch-slice-2" clipPathUnits="objectBoundingBox">
                <rect x="0" y="0.33" width="1" height="0.34" />
            </clipPath>
            <clipPath id="glitch-slice-3" clipPathUnits="objectBoundingBox">
                <rect x="0" y="0.67" width="1" height="0.33" />
            </clipPath>
        </defs>
    </svg>
);

export default GlitchMasks;

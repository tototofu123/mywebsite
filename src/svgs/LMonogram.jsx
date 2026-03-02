// SVG 4: L Monogram Mark
// Personal logo — used in nav and potentially favicon.
const LMonogram = ({ className = '', color = '#1A1714' }) => (
    <svg
        viewBox="0 0 40 40"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="L monogram"
    >
        <path
            d="M 14 10 V 30 H 28 V 26"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="miter"
            strokeLinecap="square"
            fill="none"
        />
    </svg>
);

export default LMonogram;

// SVG 2: Botanical Sprig Divider
// Tiny decorative element beside section numbers/labels.
const BotanicalSprig = ({ className = '' }) => (
    <svg
        viewBox="0 0 80 40"
        width="80"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <g stroke="#7A7268" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 15 28 Q 40 35, 70 15" />
            <path d="M 32 32.5 Q 38 40, 48 38 Q 42 32, 32 32.5" />
            <path d="M 45 26.5 Q 42 16, 32 14 Q 38 22, 45 26.5" />
            <path d="M 58 21 Q 58 10, 68 8 Q 65 16, 58 21" />
        </g>
    </svg>
);

export default BotanicalSprig;

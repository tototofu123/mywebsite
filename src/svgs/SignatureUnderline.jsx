// SVG 1: Animated Signature Underline
// Sits under the name in HeroLight. Draws itself L→R on page load.
const SignatureUnderline = ({ className = '' }) => (
    <svg
        viewBox="0 0 800 40"
        width="800"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <style>{`
            @keyframes sig-draw { to { stroke-dashoffset: 0; } }
            .sig-line { animation: sig-draw 1.2s ease-out forwards; }
        `}</style>
        <path
            className="sig-line"
            d="M 15 25 C 120 40, 220 10, 380 25 S 650 35, 785 18"
            stroke="#B8613E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
        />
    </svg>
);

export default SignatureUnderline;

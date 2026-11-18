// Badge modelled on the skip-shaped logo on the lorry door.
export default function Logo({ className = "" }) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox="0 0 160 72"
      role="img"
      aria-label="Border Skip Hire"
    >
      <path
        d="M6 10 H154 L136 64 H24 Z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M12 20 H148" stroke="#fff" strokeWidth="3" />
      <text x="80" y="40" textAnchor="middle" className="logo-word">BORDER</text>
      <text x="80" y="57" textAnchor="middle" className="logo-word logo-word-sm">SKIP HIRE</text>
    </svg>
  );
}

export function LovableLogo() {
  return (
    <svg
      aria-label="Lovable"
      className="lovable-logo"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <defs>
        <linearGradient id="lovable-gradient" x1="7.7" y1="4.2" x2="15.1" y2="23.8">
          <stop offset="0.025" stopColor="#ff8e63" />
          <stop offset="0.56" stopColor="#ff7eb0" />
          <stop offset="0.95" stopColor="#4b73ff" />
        </linearGradient>
      </defs>
      <path
        d="M6.898 0C10.707 0 13.796 3.179 13.796 7.1V9.8h2.295c3.81 0 6.898 3.178 6.898 7.1S19.901 24 16.091 24H0V7.1C0 3.179 3.088 0 6.898 0Z"
        fill="url(#lovable-gradient)"
      />
      <ellipse cx="10.2" cy="12.7" rx="7.8" ry="8.2" fill="#4B73FF" opacity="0.65" />
      <ellipse cx="11.8" cy="4.1" rx="8.5" ry="6.9" fill="#FF66F4" opacity="0.72" />
      <ellipse cx="15" cy="1.1" rx="6.8" ry="6.1" fill="#FF0105" opacity="0.65" />
      <ellipse cx="12.1" cy="4.1" rx="4.5" ry="4.6" fill="#FE7B02" opacity="0.9" />
    </svg>
  );
}

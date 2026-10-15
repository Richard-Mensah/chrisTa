type P = { size?: number };

export const Medal = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M9 1L3 9h4l-1 6 6-8H8z" fill="currentColor" />
  </svg>
);

export const Arrow = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const External = ({ size = 14 }: P) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
    <path d="M5 2H2v10h10V9M8 2h4v4M12 2L6 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const BrandMark = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
    <circle cx="17" cy="17" r="15" fill="none" stroke="#19C3B1" strokeWidth="2" />
    <path d="M4 17h7l3-6 6 12 3-6h7" fill="none" stroke="#F5B544" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const s = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;

export const AreaIcon = {
  power: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M14 3v6M8 9h12M6 9l-2 16M22 9l2 16M9 16h10M7 22h14" {...s} />
    </svg>
  ),
  solar: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 18l4-10h12l4 10zM10 8l-2 10M18 8l2 10M5 13h18M14 18v6M9 24h10" {...s} />
    </svg>
  ),
  project: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect x="4" y="5" width="20" height="18" rx="2" {...s} />
      <path d="M4 10h20M9 15h4M9 19h10" {...s} />
    </svg>
  ),
  testing: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="10" {...s} />
      <path d="M14 14l5-5M14 4v3M24 14h-3" {...s} />
    </svg>
  ),
};

const t = { fill: "none", stroke: "currentColor", strokeWidth: 1.8 } as const;

export const CredIcon = {
  registration: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 1l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V4z" {...t} />
    </svg>
  ),
  education: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M1 7l8-4 8 4-8 4zM4 9v4c3 2 7 2 10 0V9" {...t} />
    </svg>
  ),
  training: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M2 5h14v9H2zM6 5V3h6v2" {...t} />
    </svg>
  ),
  certificate: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="7" r="5" {...t} />
      <path d="M6 11l-1 6 4-2 4 2-1-6" {...t} />
    </svg>
  ),
};

export const SupportIcon: Record<string, () => React.ReactElement> = {
  bolt: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M11 2L4 11h5l-1 7 7-9h-5z" {...t} strokeLinejoin="round" />
    </svg>
  ),
  sun: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="4" {...t} />
      <path d="M10 1v3M10 16v3M1 10h3M16 10h3" {...t} />
    </svg>
  ),
  home: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 17V9l7-6 7 6v8z" {...t} />
    </svg>
  ),
  person: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="6" r="3" {...t} />
      <path d="M4 18c0-4 3-6 6-6s6 2 6 6" {...t} />
    </svg>
  ),
  network: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="5" cy="10" r="2.5" {...t} />
      <circle cx="15" cy="5" r="2.5" {...t} />
      <circle cx="15" cy="15" r="2.5" {...t} />
      <path d="M7 9l6-3M7 11l6 3" {...t} />
    </svg>
  ),
  search: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="9" cy="9" r="6" {...t} />
      <path d="M13.5 13.5L18 18" {...t} />
    </svg>
  ),
};

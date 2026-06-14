export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="18" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="11" r="5" fill="var(--color-clay)" />
    </svg>
  );
}

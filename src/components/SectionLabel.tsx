export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span aria-hidden="true" />
      <h2>{children}</h2>
    </div>
  );
}

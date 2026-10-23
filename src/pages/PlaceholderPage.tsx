import { Link } from 'react-router-dom';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main id="main-content" tabIndex={-1} className="placeholder-page">
      <p className="eyebrow">Simply AI</p>
      <h1>{title}</h1>
      <p>This learning window will be designed in a future phase.</p>
      <Link to="/">← Return home</Link>
    </main>
  );
}

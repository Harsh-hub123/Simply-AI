import { Link } from 'react-router-dom';

export function PlaceholderPage({ title }: { title: 'Learn' | 'Support' }) {
  const isLearn = title === 'Learn';
  return (
    <main id="main-content" tabIndex={-1} className="placeholder-page">
      <p className="eyebrow">Simply AI</p>
      <h1>{title}</h1>
      <p>{isLearn
        ? 'Lessons are being developed. Explore the Map to see how AI engineering concepts connect while lessons are coming together.'
        : 'Support resources are planned and are not available yet. You can return to Home to continue exploring Simply AI.'}</p>
      <Link to={isLearn ? '/roadmap' : '/'}>{isLearn ? 'Explore the Map →' : '← Return home'}</Link>
    </main>
  );
}

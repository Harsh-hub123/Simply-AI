import { Link } from 'react-router-dom';
import { ConceptNetwork } from './ConceptNetwork';
import { LineIcon } from './Icons';

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow">An interactive learning platform</p>
        <h1 id="home-title">Understand <em>AI.</em><br />Don&apos;t just use it.</h1>
        <p className="hero-deck">
          Simply AI helps you build deep intuition, mental models, and engineering understanding - from the fundamentals to modern AI systems, through interactive learning experiences.
        </p>
        <div className="built-for">
          <span>Built for</span>
          <p>Curious Learners <b>·</b> Aspiring AI Engineers <b>·</b> Anyone who wants to truly understand AI</p>
        </div>
        <div className="hero-actions">
          <Link className="cta cta-primary" to="/learn">Start Learning <span aria-hidden="true">→</span></Link>
          <Link className="cta cta-secondary" to="/roadmap"><LineIcon name="map" /> Explore the Map <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="hero-visual">
        <ConceptNetwork />
      </div>
    </section>
  );
}

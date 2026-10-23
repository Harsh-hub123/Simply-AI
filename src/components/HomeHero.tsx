import { Link } from 'react-router-dom';
import { ConceptNetwork } from './ConceptNetwork';
import { LineIcon } from './Icons';

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow">An interactive learning platform</p>
        <h1 id="home-title">
          <span>Understand <em>AI.</em></span>
          <span className="headline-accent">Don&apos;t just use it.</span>
        </h1>
        <p className="hero-deck">
          Build deep intuition for AI Engineering — from mathematics<span className="desktop-deck-break"><br /></span> and data representation to how models learn and how<span className="desktop-deck-break"><br /></span> modern AI systems are built.
        </p>
        <div className="built-for">
          <span>Built for</span>
          <p>AI/ML Learners <b>·</b> Aspiring AI Engineers <b>·</b> Software Engineers moving into AI</p>
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

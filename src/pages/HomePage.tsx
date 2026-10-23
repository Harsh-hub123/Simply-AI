import { HomeHero } from '../components/HomeHero';
import { LineIcon } from '../components/Icons';
import { SectionLabel } from '../components/SectionLabel';

const principles = [
  { icon: 'intuition' as const, title: 'Intuition First', copy: 'Understand why a concept exists before memorizing terminology.' },
  { icon: 'connected' as const, title: 'Connected Understanding', copy: 'See how ideas fit together across AI Engineering, from fundamentals to real-world systems.' },
  { icon: 'doing' as const, title: 'Learn by Doing', copy: 'Reason, predict, compare and explain through examples, experiments and real engineering context.' },
];

const learningSteps = [
  { number: '01', icon: 'why' as const, title: 'Start with Why', copy: 'Understand why a concept exists and what problem it helps us solve.' },
  { number: '02', icon: 'visual' as const, title: 'See It Visually', copy: 'Build mental models through clear diagrams, simple examples and intuitive explanations.' },
  { number: '03', icon: 'brain' as const, title: 'Reason Through It', copy: 'Predict, compare, question and explain to strengthen understanding.' },
  { number: '04', icon: 'network' as const, title: 'Connect It', copy: 'See how each idea fits into the larger AI system and what comes next.' },
];

export function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="home-backdrop" aria-hidden="true" />
      <div className="page-container">
        <HomeHero />
      </div>

      <section className="info-band principles" aria-labelledby="principles-title">
        <div className="page-container">
          <SectionLabel><span id="principles-title">What makes Simply AI different</span></SectionLabel>
          <div className="principle-grid">
            {principles.map((item) => (
              <article className="principle-item" key={item.title}>
                <div className="icon-medallion"><LineIcon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="info-band learning-method" aria-labelledby="learning-method-title">
        <div className="page-container">
          <SectionLabel><span id="learning-method-title">How you&apos;ll learn</span></SectionLabel>
          <div className="learning-grid">
            {learningSteps.map((item) => (
              <article className="learning-item" key={item.number}>
                <span className="learning-number" aria-hidden="true">{item.number}</span>
                <div className="icon-medallion small"><LineIcon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

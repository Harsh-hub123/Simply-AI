import { HomeHero } from '../components/HomeHero';
import { LineIcon } from '../components/Icons';
import { SectionLabel } from '../components/SectionLabel';
import styles from './HomeSections.module.css';

const principles = [
  { icon: 'intuition' as const, title: 'Intuition First', copy: 'Understand why a concept exists before memorizing terminology.' },
  { icon: 'connected' as const, title: 'Connected Understanding', copy: 'See how ideas fit together across AI Engineering, from fundamentals to real-world systems.' },
  { icon: 'doing' as const, title: 'Learn by Doing', copy: 'Reason, predict, compare and explain through examples, experiments and real engineering context.' },
];

const learningMethods = [
  { icon: 'book' as const, title: 'Explore Examples', copy: 'See the concept in familiar situations through clear explanations and simple visuals.' },
  { icon: 'sliders' as const, title: 'Try Experiments', copy: 'Change one thing, observe what happens and understand why the result changed.' },
  { icon: 'feedback' as const, title: 'Check Your Understanding', copy: 'Apply the concept to a new situation, explain your reasoning and use feedback to deepen your understanding.' },
];

export function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="home-backdrop" aria-hidden="true" />
      <div className="page-container">
        <HomeHero />
      </div>

      <section className={`info-band principles ${styles.supporting}`} aria-labelledby="principles-title">
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

      <section className={`info-band ${styles.process} ${styles.supporting}`} aria-labelledby="learning-method-title">
        <div className="page-container">
          <SectionLabel><span id="learning-method-title">How you’ll learn</span></SectionLabel>
          <ul className={`principle-grid ${styles.processList}`} role="list">
            {learningMethods.map((item) => (
              <li className={`principle-item ${styles.step}`} key={item.icon}>
                <div className="icon-medallion" aria-hidden="true"><LineIcon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

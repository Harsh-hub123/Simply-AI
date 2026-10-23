import { HomeHero } from '../components/HomeHero';
import { LineIcon } from '../components/Icons';
import { SectionLabel } from '../components/SectionLabel';

const principles = [
  { icon: 'intuition' as const, tone: 'amber', title: 'Intuition First', copy: 'We focus on deep intuition and mental models, not just theory or tool usage.' },
  { icon: 'connected' as const, tone: 'cyan', title: 'Connected Understanding', copy: 'See how concepts build on each other, from mathematics to modern AI systems.' },
  { icon: 'doing' as const, tone: 'amber', title: 'Learn by Doing', copy: 'Interactive visualizations and experiences help you actually understand, not just read.' },
];

const promises = [
  { icon: 'brain' as const, title: 'Build Real Intuition', copy: 'Go beyond surface-level understanding.' },
  { icon: 'network' as const, title: 'See How Concepts Connect', copy: 'From fundamentals to real-world AI systems.' },
  { icon: 'clarity' as const, title: 'Think Clearly About AI', copy: 'Develop a structured and engineering mindset.' },
  { icon: 'engaging' as const, title: 'Learn in an Engaging Way', copy: 'Interactive, visual, and actually interesting.' },
];

export function HomePage() {
  return (
    <main>
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
                <div className={`icon-medallion ${item.tone}`}><LineIcon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="info-band promises" aria-labelledby="promises-title">
        <div className="page-container">
          <SectionLabel><span id="promises-title">What Simply AI promises</span></SectionLabel>
          <div className="promise-grid">
            {promises.map((item) => (
              <article className="promise-item" key={item.title}>
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

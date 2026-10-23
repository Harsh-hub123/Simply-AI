import type { RoadmapConcept } from '../../data/roadmapConcepts';
import { roadmapConcepts, territories } from '../../data/roadmapConcepts';

const points = [
  [78, 282], [196, 340], [326, 260], [448, 342], [568, 374],
  [686, 342], [808, 266], [930, 344], [1044, 270], [1150, 184],
];

function NodeIcon({ icon }: { icon: RoadmapConcept['icon'] }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.65, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<RoadmapConcept['icon'], React.ReactNode> = {
    math: <><path {...common} d="M18 6H8l6 6-6 6h10"/><path {...common} d="M7 4h12M7 20h12"/></>,
    data: <><path {...common} d="m5 8 7-4 7 4-7 4-7-4Z"/><path {...common} d="m5 8v8l7 4 7-4V8M12 12v8"/><path {...common} d="m8 10 7-4"/></>,
    model: <><circle {...common} cx="12" cy="12" r="2"/><circle {...common} cx="5" cy="6" r="1.5"/><circle {...common} cx="19" cy="5" r="1.5"/><circle {...common} cx="5" cy="18" r="1.5"/><circle {...common} cx="19" cy="19" r="1.5"/><path {...common} d="m6.3 7 4 3.7m3.4-.2 4-4.2m-7.3 7-4.1 3.7m7.3-3.6 4.1 4.3"/></>,
    loss: <><path {...common} d="M4 19V5m0 14h16M7 16l4-5 3 2 5-7"/><path {...common} d="m16 6h3v3"/></>,
    gradient: <><path {...common} d="M5 18 18 5m-8 0h8v8M5 6v5m-2-3h5M14 19v-5m-2 3h5"/><circle {...common} cx="7" cy="16" r="2"/></>,
    optimization: <><circle {...common} cx="12" cy="12" r="7"/><circle {...common} cx="12" cy="12" r="3"/><path {...common} d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/></>,
    neural: <><circle {...common} cx="5" cy="6" r="1.4"/><circle {...common} cx="5" cy="18" r="1.4"/><circle {...common} cx="12" cy="5" r="1.4"/><circle {...common} cx="12" cy="12" r="1.4"/><circle {...common} cx="12" cy="19" r="1.4"/><circle {...common} cx="19" cy="8" r="1.4"/><circle {...common} cx="19" cy="16" r="1.4"/><path {...common} d="m6.4 6 4.2-1m-4.2 1 4.2 6m-4.2 6 4.2-6m-4.2 6 4.2 1m2.8-14 4.2 3m-4.2-3 4.2 11m-4.2-4 4.2-4m-4.2 11 4.2-3"/></>,
    layers: <><path {...common} d="m4 9 8-4 8 4-8 4-8-4Z"/><path {...common} d="m5 13 7 3.5 7-3.5M5 17l7 3.5 7-3.5"/></>,
    'modern-model': <><path {...common} d="m5 7 7-4 7 4-7 4-7-4Z"/><path {...common} d="M5 7v10l7 4 7-4V7M12 11v10"/><path {...common} d="m8 9 2 3-2 3m8-6-2 3 2 3"/></>,
    system: <><rect {...common} x="5" y="3" width="14" height="5" rx="1.5"/><rect {...common} x="5" y="10" width="14" height="5" rx="1.5"/><rect {...common} x="5" y="17" width="14" height="4" rx="1.5"/><path {...common} d="M8 5.5h.01M8 12.5h.01M8 19h.01M11 5.5h5M11 12.5h5M11 19h5"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon]}</svg>;
}

interface RoadmapGraphProps {
  selected: RoadmapConcept | null;
  onSelect: (concept: RoadmapConcept) => void;
}

export function RoadmapGraph({ selected, onSelect }: RoadmapGraphProps) {
  const selectedIndex = selected ? selected.order - 1 : -1;

  return (
    <section className="roadmap-graph" aria-label="AI Engineering concept map">
      <div className="roadmap-graph-scroll">
        <div className="roadmap-canvas">
          <div className="territory-row" aria-hidden="true">
            {territories.map((territory) => (
              <div key={territory.id} className={`territory territory-${territory.id}${selected?.territory === territory.id ? ' is-active' : ''}`}>
                <strong>{territory.title}</strong><span>{territory.subtitle}</span>
              </div>
            ))}
          </div>

          <svg className="roadmap-decoration" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="primary-path" x1="0" x2="1"><stop stopColor="#dda848"/><stop offset=".16" stopColor="#21d5e7"/><stop offset="1" stopColor="#21d5e7"/></linearGradient>
              <filter id="path-glow"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <g className="territory-arcs">
              <path d="M0 118 Q130 16 278 118"/><path d="M276 118 Q500 10 690 118"/><path d="M688 118 Q835 18 962 118"/><path className="amber" d="M958 118 Q1088 22 1200 112"/>
            </g>
            <g className="related-paths">
              <path d="M55 306 C180 102 298 110 448 342 S710 480 808 266 S1050 96 1172 260"/>
              <path className="amber" d="M75 282 C162 458 344 438 448 342 S682 164 930 344 S1088 424 1170 184"/>
              <path d="M196 340 C320 466 475 172 568 374 S790 456 930 344 S1070 250 1150 184"/>
              <path className="soft" d="M326 260 C482 110 650 182 808 266 S1030 448 1180 360"/>
              <path className="soft" d="M78 282 C260 210 432 238 568 374 S865 120 1044 270"/>
            </g>
            <g className="primary-path" filter="url(#path-glow)">
              {points.slice(0, -1).map((point, index) => {
                const next = points[index + 1];
                const active = selectedIndex < 0 || index === selectedIndex || index === selectedIndex - 1;
                return <path key={index} className={selected && !active ? 'is-muted' : active && selected ? 'is-context' : ''} d={`M${point[0]} ${point[1]} Q${(point[0] + next[0]) / 2} ${Math.min(point[1], next[1]) - 17} ${next[0]} ${next[1]}`} />;
              })}
            </g>
            <g className="graph-points">
              {[132, 246, 382, 512, 632, 748, 868, 992, 1098].map((x, i) => <circle key={x} cx={x} cy={185 + (i % 3) * 82} r={i % 2 ? 2 : 1.4}/>) }
            </g>
          </svg>

          {roadmapConcepts.map((concept, index) => {
            const [x, y] = points[index];
            const contextual = selectedIndex >= 0 && Math.abs(index - selectedIndex) <= 1;
            const quiet = selectedIndex >= 0 && !contextual;
            return (
              <button
                id={`roadmap-node-${concept.slug}`}
                type="button"
                className={`roadmap-node${selected?.id === concept.id ? ' is-selected' : ''}${contextual ? ' is-context' : ''}${quiet ? ' is-quiet' : ''}${concept.order === 1 ? ' is-start' : ''}`}
                style={{ left: `${(x / 1200) * 100}%`, top: `${(y / 500) * 100}%` }}
                key={concept.id}
                onClick={() => onSelect(concept)}
                aria-pressed={selected?.id === concept.id}
                aria-label={`${concept.id} ${concept.title}. ${concept.tagline}`}
              >
                {concept.order === 1 && <span className="start-here" aria-hidden="true">↓ Start here</span>}
                <span className="roadmap-node-icon"><NodeIcon icon={concept.icon}/></span>
                <span className="roadmap-node-copy"><b>{concept.id}</b><strong>{concept.mapTitle.split('\n').map((part) => <span key={part}>{part}</span>)}</strong></span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="roadmap-supporting">
        <div className="journey-copy"><span className="journey-mark" aria-hidden="true">✦</span><div><h2>A connected journey</h2><p>Each concept builds on the previous ones, forming a complete understanding of AI Engineering.</p></div></div>
        <div className="roadmap-legend" aria-label="Map legend"><span><i className="legend-primary"/>Primary learning path</span><span><i className="legend-related"/>Related concepts</span></div>
      </div>
    </section>
  );
}

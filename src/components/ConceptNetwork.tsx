import { useState } from 'react';
import { Link } from 'react-router-dom';

type MajorId = 'data-representation' | 'model' | 'loss' | 'gradient';

const majorNodes: Array<{ id: MajorId; title: string; copy: string; icon: React.ReactNode }> = [
  { id: 'data-representation', title: 'Data Representation', copy: 'How the real world becomes numbers', icon: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></> },
  { id: 'model', title: 'Model', copy: 'What learns from data', icon: <><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/><path d="m7.3 6.8 3.4 4M16.7 6.8l-3.4 4m-2.6 2.4-3.4 4m6-4 3.4 4"/></> },
  { id: 'loss', title: 'Loss', copy: 'How it knows it is wrong', icon: <><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></> },
  { id: 'gradient', title: 'Gradient', copy: 'How it finds what to change', icon: <path d="M3 17c4 0 4-10 8-10s4 10 10 10"/> },
];

const connections: Array<{ id: MajorId; d: string; accent?: boolean }> = [
  { id: 'data-representation', d: 'M360 246 C360 205 360 176 360 140' },
  { id: 'model', d: 'M294 258 C250 244 224 228 187 218' },
  { id: 'loss', d: 'M426 258 C470 244 500 228 535 220', accent: true },
  { id: 'gradient', d: 'M360 316 C360 350 360 375 360 396' },
];

export function ConceptNetwork() {
  const [active, setActive] = useState<MajorId | null>(null);

  return (
    <div className="concept-network" aria-label="Map showing concepts connected to AI Systems">
      <span className="map-orbit map-orbit-one" aria-hidden="true" />
      <span className="map-orbit map-orbit-two" aria-hidden="true" />
      <svg className="network-lines" viewBox="0 0 720 520" role="presentation">
        <g className="secondary-lines">
          <path d="M187 218 C155 190 134 160 92 150"/><path d="M187 218 C145 240 119 270 80 274"/>
          <path d="M360 140 C322 114 292 86 265 60"/><path d="M360 140 C411 106 463 74 522 74"/>
          <path d="M535 220 C577 190 611 188 682 190"/><path d="M535 220 C579 244 606 278 682 285"/>
          <path d="M360 396 C309 401 275 428 238 466"/><path d="M360 396 C422 398 463 429 509 466"/>
          <path d="M294 274 C240 312 205 344 132 342"/><path d="M426 276 C474 310 518 336 590 334"/>
        </g>
        <g className="major-lines">
          {connections.map((line) => (
            <path
              key={line.id}
              d={line.d}
              className={`${line.accent ? 'amber' : ''} ${active === line.id ? 'is-active' : ''} ${active && active !== line.id ? 'is-muted' : ''}`}
            />
          ))}
        </g>
        <g className="junctions">
          <circle cx="360" cy="140" r="3"/><circle cx="187" cy="218" r="3"/><circle cx="535" cy="220" r="3"/><circle cx="360" cy="396" r="3"/>
          <circle className="amber-dot" cx="360" cy="176" r="3"/><circle className="amber-dot" cx="488" cy="239" r="3"/>
        </g>
      </svg>

      <div className="central-node">
        <span>AI</span>
        <span>Systems</span>
      </div>

      {majorNodes.map((node) => (
        <Link
          key={node.id}
          to={`/roadmap?concept=${node.id}`}
          className={`concept-node node-${node.id} ${active === node.id ? 'is-active' : ''} ${active && active !== node.id ? 'is-muted' : ''}`}
          onMouseEnter={() => setActive(node.id)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(node.id)}
          onBlur={() => setActive(null)}
          aria-label={`${node.title}: ${node.copy}`}
        >
          <span className="concept-node__icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">{node.icon}</svg>
          </span>
          <span className="concept-node__text">
            <strong>{node.title}</strong>
            <small>{node.copy}</small>
          </span>
        </Link>
      ))}

      <span className="minor-label minor-data">Data</span>
      <span className="minor-label minor-learning">Learning</span>
      <span className="minor-label minor-optimization">Optimization</span>
      <span className="minor-label minor-evaluation">Evaluation</span>
      <span className="minor-label minor-neural">Neural Networks</span>
      <span className="minor-label minor-modern">Modern AI Models</span>
      <span className="minor-label minor-deployment">Deployment</span>
    </div>
  );
}

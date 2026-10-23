import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type MajorId = 'data-representation' | 'model' | 'loss' | 'gradient';

const majorNodes: Array<{ id: MajorId; title: string; copy: string; icon: ReactNode }> = [
  {
    id: 'data-representation',
    title: 'Data Representation',
    copy: 'How the real world becomes numbers',
    icon: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></>,
  },
  {
    id: 'model',
    title: 'Model',
    copy: 'What learns from data',
    icon: <><path d="m12 2 8 4.6v10.8L12 22l-8-4.6V6.6L12 2Z"/><circle cx="12" cy="7" r="1.2"/><circle cx="7.5" cy="14.5" r="1.2"/><circle cx="16.5" cy="14.5" r="1.2"/><path d="m11.4 8-3.2 5.4m4.4-5.4 3.2 5.4m-7.1 1.1h6.6"/></>,
  },
  {
    id: 'loss',
    title: 'Loss',
    copy: 'How it knows it is wrong',
    icon: <><path d="M4 20h17"/><path d="M6 17v-5h3v5H6Zm5 0V8h3v9h-3Zm5 0V4h3v13h-3Z"/></>,
  },
  {
    id: 'gradient',
    title: 'Gradient',
    copy: 'How it finds what to change',
    icon: <><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.1m0 14.8v2.1M2.5 12h2.1m14.8 0h2.1M5.3 5.3l1.5 1.5m10.4 10.4 1.5 1.5m0-13.4-1.5 1.5M6.8 17.2l-1.5 1.5"/><circle cx="12" cy="12" r="7.4"/></>,
  },
];

const connections: Array<{ id: MajorId; d: string; outgoing?: boolean }> = [
  { id: 'data-representation', d: 'M360 154 C365 174 390 185 418 196' },
  { id: 'model', d: 'M565 140 C560 162 544 177 530 190' },
  { id: 'loss', d: 'M624 247 C598 247 579 241 559 235' },
  { id: 'gradient', d: 'M475 311 C475 320 475 330 475 340', outgoing: true },
];

export function ConceptNetwork() {
  const [active, setActive] = useState<MajorId | null>(null);

  return (
    <div className="concept-network" aria-label="Map showing concepts connected to AI Systems">
      <svg className="network-lines" viewBox="0 0 860 510" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="network-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10" />
          </marker>
        </defs>

        <g className="network-gridlines">
          <path d="M28 257 C103 94 290 22 479 42 C674 61 803 165 835 294" />
          <path d="M64 326 C155 169 300 101 472 102 C657 103 780 208 811 356" />
          <path d="M82 389 C205 278 318 230 470 224 C620 218 737 277 802 411" />
          <path d="M111 110 C244 202 327 350 383 490" />
          <path d="M735 81 C626 184 575 333 561 493" />
          <path d="M180 36 C317 116 576 118 744 38" />
        </g>

        <g className="network-related-lines">
          <path className="cyan-dash" d="M122 85 C243 26 374 22 504 54 C636 86 730 169 782 286" />
          <path className="amber-dash" d="M347 82 C453 64 575 77 673 141 C737 183 773 241 785 302" />
          <path className="cyan-dash" d="M139 377 C264 465 458 486 623 431 C703 404 758 359 794 302" />
          <path className="amber-dash" d="M159 337 C255 264 350 236 469 237 C597 238 685 274 769 363" />
        </g>

        <g className="major-lines">
          {connections.map((line) => (
            <path
              key={line.id}
              d={line.d}
              markerEnd="url(#network-arrow)"
              className={`${line.outgoing ? 'outgoing' : ''} ${active === line.id ? 'is-active' : ''} ${active && active !== line.id ? 'is-muted' : ''}`}
            />
          ))}
        </g>

        <g className="network-points">
          <circle cx="72" cy="213" r="2"/><circle cx="114" cy="390" r="3"/><circle cx="161" cy="169" r="2"/>
          <circle cx="207" cy="444" r="2"/><circle cx="253" cy="65" r="2"/><circle cx="307" cy="270" r="2"/>
          <circle cx="347" cy="82" r="3" className="amber"/><circle cx="399" cy="422" r="2"/><circle cx="440" cy="30" r="2"/>
          <circle cx="521" cy="76" r="2"/><circle cx="585" cy="448" r="2"/><circle cx="642" cy="105" r="3" className="amber"/>
          <circle cx="696" cy="386" r="2"/><circle cx="744" cy="173" r="2"/><circle cx="785" cy="302" r="3" className="amber"/>
          <circle cx="825" cy="235" r="2"/>
        </g>
      </svg>

      <div className="central-node" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="m12 2.8 7.8 4.5v9L12 20.8l-7.8-4.5v-9L12 2.8Z"/>
          <path d="m4.2 7.3 7.8 4.5 7.8-4.5M12 11.8v9M8.1 5.1l7.8 4.5v4.5l-7.8-4.5V5.1Z"/>
        </svg>
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
      <span className="minor-label minor-neural">Neural<br />Networks</span>
      <span className="minor-label minor-modern">Modern<br />AI Models</span>
      <span className="minor-label minor-deployment">Deployment</span>
    </div>
  );
}

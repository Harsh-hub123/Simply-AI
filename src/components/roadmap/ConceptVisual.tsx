import type { ReactNode } from 'react';
import type { ConceptVisual as ConceptVisualData } from '../../data/roadmapConcepts';

function VisualNode({ children, className = '', focus = false }: { children: ReactNode; className?: string; focus?: boolean }) {
  return <div className={`cv-node${focus ? ' cv-node-focus' : ''}${className ? ` ${className}` : ''}`}>{children}</div>;
}

function ConnectorLayer({ children, mobile = false }: { children: ReactNode; mobile?: boolean }) {
  return (
    <svg className={`cv-connectors ${mobile ? 'cv-connectors-mobile' : 'cv-connectors-wide'}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id={mobile ? 'cv-arrow-mobile' : 'cv-arrow-wide'} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7Z" /></marker></defs>
      {children}
    </svg>
  );
}

const pathMarker = (mobile = false) => `url(#${mobile ? 'cv-arrow-mobile' : 'cv-arrow-wide'})`;

function MathematicsVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'hub' }> }) {
  return <figure className="concept-visual cv-mathematics" role="img" aria-label={`${visual.items.join(', ')} all connect into ${visual.center}`}>
    <ConnectorLayer><path d="M37 31 C39 31 41 34 43 37" markerEnd={pathMarker()} /><path d="M63 31 C61 31 59 34 57 37" markerEnd={pathMarker()} /><path d="M37 69 C39 69 41 66 43 63" markerEnd={pathMarker()} /><path d="M63 69 C61 69 59 66 57 63" markerEnd={pathMarker()} /></ConnectorLayer>
    {visual.items.map((item, index) => <VisualNode key={item} className={`cv-math-source cv-math-source-${index + 1}`}>{item}</VisualNode>)}
    <VisualNode focus className="cv-math-focus">{visual.center}</VisualNode>
  </figure>;
}

function TransformationVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'vector' }> }) {
  return <figure className="concept-visual cv-transformation" role="img" aria-label={`${visual.subject}, ${visual.details.join(', ')}, transforms into ${visual.result}`}>
    <ConnectorLayer><path d="M45 50 H59" markerEnd={pathMarker()} /></ConnectorLayer>
    <ConnectorLayer mobile><path d="M50 42 V63" markerEnd={pathMarker(true)} /></ConnectorLayer>
    <VisualNode className="cv-transform-source"><b>{visual.subject}</b>{visual.details.map((detail) => <small key={detail}>{detail}</small>)}</VisualNode>
    <VisualNode focus className="cv-transform-result"><b>{visual.result}</b></VisualNode>
  </figure>;
}

function ModelVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'model' }> }) {
  return <figure className="concept-visual cv-model" role="img" aria-label={`${visual.training} teaches ${visual.model}. ${visual.input} passes through the model to produce ${visual.prediction}.`}>
    <ConnectorLayer><path d="M32 24 C36 24 36 39 40 42" markerEnd={pathMarker()} /><path d="M32 76 C36 76 36 61 40 58" markerEnd={pathMarker()} /><path d="M64 50 H73" markerEnd={pathMarker()} /></ConnectorLayer>
    <VisualNode className="cv-model-training">{visual.training}</VisualNode><VisualNode className="cv-model-input">{visual.input}</VisualNode><VisualNode className="cv-model-core">{visual.model}</VisualNode><VisualNode focus className="cv-model-output">{visual.prediction}</VisualNode>
  </figure>;
}

function LossVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'compare' }> }) {
  return <figure className="concept-visual cv-loss" role="img" aria-label={`${visual.items.map((item) => `${item.title} ${item.value}`).join(' and ')} are compared to produce ${visual.result}, ${visual.note}.`}>
    <ConnectorLayer><path d="M42 27 C50 27 50 43 59 46" markerEnd={pathMarker()} /><path d="M42 73 C50 73 50 57 59 54" markerEnd={pathMarker()} /></ConnectorLayer>
    {visual.items.map((item, index) => <VisualNode key={item.title} className={`cv-loss-input cv-loss-input-${index + 1}`}><small>{item.title}</small><b>{item.value}</b></VisualNode>)}
    <VisualNode focus className="cv-loss-result"><b>{visual.result}</b><small>{visual.note}</small></VisualNode>
  </figure>;
}

function GradientVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'gradient' }> }) {
  return <figure className="concept-visual cv-gradient" role="img" aria-label={`${visual.parameters}, ${visual.parameterNote}, affect ${visual.loss}; ${visual.gradient} describes that relationship. ${visual.question}`}>
    <ConnectorLayer><path d="M31 36 H39" markerEnd={pathMarker()} /><path d="M62 36 H70" markerEnd={pathMarker()} /></ConnectorLayer>
    <ConnectorLayer mobile><path d="M50 27 V36" markerEnd={pathMarker(true)} /><path d="M50 51 V60" markerEnd={pathMarker(true)} /></ConnectorLayer>
    <VisualNode className="cv-gradient-parameters"><b>{visual.parameters}</b><small>{visual.parameterNote}</small></VisualNode><VisualNode className="cv-gradient-loss">{visual.loss}</VisualNode><VisualNode focus className="cv-gradient-result">{visual.gradient}</VisualNode>
    <p className="cv-diagram-question">{visual.question}</p>
  </figure>;
}

function FeedbackVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'feedback' }> }) {
  return <figure className="concept-visual cv-feedback" role="img" aria-label={`${visual.steps.join(' to ')}, then ${visual.repeat}.`}>
    <ConnectorLayer><path d="M36 24 H64" markerEnd={pathMarker()} /><path d="M76 35 V65" markerEnd={pathMarker()} /><path d="M64 76 H36" markerEnd={pathMarker()} /><path className="cv-loop-path" d="M24 65 V35" markerEnd={pathMarker()} /></ConnectorLayer>
    <VisualNode className="cv-feedback-step cv-feedback-step-1">{visual.steps[0]}</VisualNode><VisualNode className="cv-feedback-step cv-feedback-step-2">{visual.steps[1]}</VisualNode><VisualNode className="cv-feedback-step cv-feedback-step-3">{visual.steps[2]}</VisualNode><VisualNode focus className="cv-feedback-step cv-feedback-step-4">{visual.steps[3]}</VisualNode>
    <span className="cv-repeat-label">{visual.repeat}</span>
  </figure>;
}

function LayersVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'layers' }> }) {
  return <figure className="concept-visual cv-layers" role="img" aria-label={visual.steps.join(' through ')}>
    <ConnectorLayer>{[[18, 22], [38, 42], [58, 62], [78, 79]].map(([from, to]) => <path key={from} d={`M${from} 50 H${to}`} markerEnd={pathMarker()} />)}</ConnectorLayer>
    <ConnectorLayer mobile>{[18, 35, 52, 69].map((y) => <path key={y} d={`M50 ${y} V${y + 4}`} markerEnd={pathMarker(true)} />)}</ConnectorLayer>
    {visual.steps.map((step, index) => <VisualNode key={step} focus={index === visual.steps.length - 1} className={`cv-layer cv-layer-${index + 1}${index > 0 && index < visual.steps.length - 1 ? ' cv-learned-layer' : ''}`}>{step}</VisualNode>)}
  </figure>;
}

function RepresentationsVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'representations' }> }) {
  return <figure className="concept-visual cv-representations" role="img" aria-label={visual.steps.map((step) => `${step.title}${step.note ? `, ${step.note}` : ''}`).join(' to ')}>
    <ConnectorLayer><path d="M16 50 H18" markerEnd={pathMarker()} /><path d="M47 50 H49" markerEnd={pathMarker()} /><path d="M78 50 H80" markerEnd={pathMarker()} /></ConnectorLayer>
    <ConnectorLayer mobile>{[20, 42, 64].map((y) => <path key={y} d={`M50 ${y} V${y + 5}`} markerEnd={pathMarker(true)} />)}</ConnectorLayer>
    {visual.steps.map((step, index) => <VisualNode key={step.title} focus={index === 2} className={`cv-representation cv-representation-${index + 1}`}><b>{step.title}</b>{step.note && <small>{step.note}</small>}</VisualNode>)}
  </figure>;
}

function BranchVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'branch' }> }) {
  const branchYs = [25, 37, 49, 61, 73];
  return <figure className="concept-visual cv-branch" role="img" aria-label={`${visual.source} trains a ${visual.model}, which supports ${visual.taskLabel}: ${visual.tasks.join(', ')}.`}>
    <ConnectorLayer><path d="M29 50 H38" markerEnd={pathMarker()} />{branchYs.map((y) => <path key={y} d={`M62 50 C66 50 65 ${y} 70 ${y}`} markerEnd={pathMarker()} />)}</ConnectorLayer>
    <ConnectorLayer mobile><path d="M50 22 V31" markerEnd={pathMarker(true)} /><path d="M50 45 V53" markerEnd={pathMarker(true)} /></ConnectorLayer>
    <VisualNode className="cv-branch-source">{visual.source}</VisualNode><VisualNode focus className="cv-branch-model">{visual.model}</VisualNode>
    <div className="cv-task-group"><b>{visual.taskLabel}</b><div>{visual.tasks.map((task) => <span key={task}>{task}</span>)}</div></div>
  </figure>;
}

function SystemVisual({ visual }: { visual: Extract<ConceptVisualData, { kind: 'system' }> }) {
  return <figure className="concept-visual cv-system" role="img" aria-label={`${visual.entry} connects to ${visual.core}, containing ${visual.parts.join(', ')}, producing ${visual.result}.`}>
    <ConnectorLayer><path d="M50 21 V30" markerEnd={pathMarker()} /><path d="M50 76 V85" markerEnd={pathMarker()} /></ConnectorLayer>
    <VisualNode className="cv-system-entry">{visual.entry}</VisualNode>
    <div className="cv-system-boundary"><strong>{visual.core}</strong><div>{visual.parts.map((part) => <span key={part}>{part}</span>)}</div></div>
    <VisualNode focus className="cv-system-result">{visual.result}</VisualNode>
  </figure>;
}

export function ConceptVisual({ visual }: { visual: ConceptVisualData }) {
  switch (visual.kind) {
    case 'hub': return <MathematicsVisual visual={visual} />;
    case 'vector': return <TransformationVisual visual={visual} />;
    case 'model': return <ModelVisual visual={visual} />;
    case 'compare': return <LossVisual visual={visual} />;
    case 'gradient': return <GradientVisual visual={visual} />;
    case 'feedback': return <FeedbackVisual visual={visual} />;
    case 'layers': return <LayersVisual visual={visual} />;
    case 'representations': return <RepresentationsVisual visual={visual} />;
    case 'branch': return <BranchVisual visual={visual} />;
    case 'system': return <SystemVisual visual={visual} />;
  }
}

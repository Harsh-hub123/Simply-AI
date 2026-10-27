import { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { conceptBySlug, type RoadmapConcept } from '../../data/roadmapConcepts';
import { ConceptVisual } from './ConceptVisual';
import mathStyles from './MathematicsPreview.module.css';
import dataStyles from './DataRepresentationPreview.module.css';
import modelStyles from './ModelPreview.module.css';
import lossStyles from './LossPreview.module.css';

interface ConceptInspectorProps {
  concept: RoadmapConcept;
  isMobile: boolean;
  onClose: () => void;
  onSelect: (concept: RoadmapConcept) => void;
}

export function ConceptInspector({ concept, isMobile, onClose, onSelect }: ConceptInspectorProps) {
  const panelRef = useRef<HTMLElement>(null);
  const readingRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const next = concept.nextConcept ? conceptBySlug.get(concept.nextConcept) : undefined;
  const isMathematics = concept.slug === 'mathematics';
  const isDataRepresentation = concept.slug === 'data-representation';
  const isModel = concept.slug === 'model';
  const isLoss = concept.slug === 'loss';

  useLayoutEffect(() => {
    readingRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    headingRef.current?.focus({ preventScroll: true });
  }, [concept.slug, isMobile]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      if (!event.shiftKey && document.activeElement === headingRef.current) {
        event.preventDefault();
        closeRef.current?.focus({ preventScroll: true });
        return;
      }
      if (!isMobile) return;
      const controls = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')).filter((element) => element.getClientRects().length > 0);
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current || !panel.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
    };
    panel.addEventListener('keydown', handleTabKey);
    return () => panel.removeEventListener('keydown', handleTabKey);
  }, [isMobile]);

  return (
    <aside
      ref={panelRef}
      className={isMathematics ? `concept-inspector ${mathStyles.preview}` : isDataRepresentation ? `concept-inspector ${dataStyles.preview}` : 'concept-inspector'}
      aria-labelledby="inspector-title"
      role={isMobile ? 'dialog' : 'complementary'}
      aria-modal={isMobile || undefined}
    >
      <div className="inspector-toolbar">
        <button ref={closeRef} className="inspector-close" type="button" onClick={onClose} aria-label={`Close ${concept.title} details`}><span aria-hidden="true">×</span></button>
      </div>
      <div ref={readingRef} className="inspector-reading" role="region" aria-label={`${concept.title} explanation`} tabIndex={0}>
        <div className="inspector-inner" key={concept.slug}>
          <header className="inspector-heading">
            <p>{concept.id} <span>/</span> {concept.territoryLabel}</p>
            <h2 ref={headingRef} id="inspector-title" tabIndex={-1}>{concept.title}</h2>
            <h3>{concept.tagline}</h3>
          </header>

          <div className="inspector-body">
            <div className="concept-prose">
              {concept.body.slice(0, concept.body.length > 4 ? 2 : undefined).map((paragraph, index) => <p className={concept.accentParagraph === index ? 'accent-copy' : ''} key={paragraph}>{paragraph}</p>)}
              {concept.body.length > 4 && <details className="concept-full-explanation"><summary>Read the full explanation</summary>{concept.body.slice(2).map((paragraph, index) => <p className={concept.accentParagraph === index + 2 ? 'accent-copy' : ''} key={paragraph}>{paragraph}</p>)}</details>}
            </div>
            <ConceptVisual visual={concept.visual}/>
            {isLoss && <p className={lossStyles.supportingNote}>We’ll explore different ways to measure a model’s error as we go deeper.</p>}
            <section className="key-idea" aria-label="Key idea">
              <h4>{concept.keyLabel}</h4>
              {concept.keyText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            {isMathematics ? <>
              <div className={mathStyles.continuation}>{concept.deeper.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <p className={mathStyles.closingQuestion}>First, how do we turn real-world information into something a model can work with?</p>
            </> : isDataRepresentation ? <>
              <div className={dataStyles.continuation}>{concept.deeper.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <p className={dataStyles.closingQuestion}>Once the information is represented, what turns it into a prediction?</p>
            </> : isModel ? <p className={modelStyles.closingQuestion}>How do we measure how far a prediction is from the actual outcome?</p>
              : isLoss ? <section className={lossStyles.transition} aria-label="What comes next"><h4>What comes next</h4><p>Training aims to reduce this loss. How can we tell which changes inside the model would help?</p></section>
                : <section className="deeper-copy" aria-label="In more detail"><h4>In more detail</h4>{concept.deeper.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>}
          </div>
        </div>
      </div>
      <footer className="inspector-footer">
        {next && <button className="connects-next" type="button" onClick={() => onSelect(next)}><span><small>Connects next</small><strong>{next.id} {next.title}</strong></span><span aria-hidden="true">→</span></button>}
        {concept.lessonStatus === 'available'
          ? <Link className="learn-concept-cta" to={concept.learnRoute}>Learn this concept <span aria-hidden="true">→</span></Link>
          : <p className="inspector-lesson-status">Lesson planned</p>}
      </footer>
    </aside>
  );
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { conceptBySlug, type RoadmapConcept } from '../../data/roadmapConcepts';
import { ConceptVisual } from './ConceptVisual';

interface ConceptInspectorProps {
  concept: RoadmapConcept;
  isMobile: boolean;
  onClose: () => void;
  onSelect: (concept: RoadmapConcept) => void;
}

export function ConceptInspector({ concept, isMobile, onClose, onSelect }: ConceptInspectorProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    if (isMobile) document.getElementById('inspector-title')?.focus();
  }, [concept.slug]);

  useEffect(() => {
    if (!isMobile) return;
    document.getElementById('inspector-title')?.focus();
    const panel = panelRef.current;
    if (!panel) return;
    const keepFocusInside = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const controls = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement?.id === 'inspector-title' || !panel.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
    };
    panel.addEventListener('keydown', keepFocusInside);
    return () => panel.removeEventListener('keydown', keepFocusInside);
  }, [isMobile]);

  return (
    <aside
      ref={panelRef}
      className="concept-inspector"
      aria-labelledby="inspector-title"
      role={isMobile ? 'dialog' : 'complementary'}
      aria-modal={isMobile || undefined}
    >
      <button ref={closeRef} className="inspector-close" type="button" onClick={onClose} aria-label={`Close ${concept.title} details`}><span aria-hidden="true">×</span></button>
      <div className="inspector-inner" key={concept.slug}>
        <header className="inspector-heading">
          <p>{concept.id} <span>/</span> {concept.territoryLabel}</p>
          <h2 id="inspector-title" tabIndex={-1}>{concept.title}</h2>
          <h3>{concept.tagline}</h3>
        </header>

        <div className="inspector-body">
          <div className="concept-prose">
            {concept.body.map((paragraph, index) => <p className={concept.accentParagraph === index ? 'accent-copy' : ''} key={paragraph}>{paragraph}</p>)}
          </div>
          <ConceptVisual visual={concept.visual}/>
          <section className="key-idea" aria-label="Key idea">
            <h4>{concept.keyLabel}</h4>
            {concept.keyText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
          <section className="deeper-copy" aria-label="In more detail"><h4>In more detail</h4>{concept.deeper.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          {concept.nextConcept && conceptBySlug.get(concept.nextConcept) && <button className="connects-next" type="button" onClick={() => onSelect(conceptBySlug.get(concept.nextConcept!)!)}><span><small>Connects next</small><strong>{conceptBySlug.get(concept.nextConcept)!.id} {conceptBySlug.get(concept.nextConcept)!.title}</strong></span><span aria-hidden="true">→</span></button>}
          <Link className="learn-concept-cta" to={concept.learnRoute}>Learn this concept <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </aside>
  );
}

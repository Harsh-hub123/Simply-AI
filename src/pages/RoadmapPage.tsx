import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ConceptInspector } from '../components/roadmap/ConceptInspector';
import { RoadmapGraph } from '../components/roadmap/RoadmapGraph';
import { conceptBySlug, type RoadmapConcept } from '../data/roadmapConcepts';
import '../roadmap.css';

function useMobileSheet() {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 820px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 820px)');
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return mobile;
}

export function RoadmapPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useMobileSheet();
  const selected = conceptBySlug.get(searchParams.get('concept') ?? '') ?? null;

  useEffect(() => {
    if (!isMobile || !selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMobile, selected?.slug]);

  const selectConcept = (concept: RoadmapConcept) => {
    setSearchParams({ concept: concept.slug });
  };

  const closeInspector = () => {
    const lastSlug = selected?.slug;
    setSearchParams({}, { replace: true });
    window.requestAnimationFrame(() => {
      if (lastSlug) document.getElementById(`roadmap-node-${lastSlug}`)?.focus();
    });
  };

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeInspector();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selected?.slug]);

  return (
    <main className={`roadmap-page${selected ? ' has-selection' : ''}`}>
      <div className="roadmap-atmosphere" aria-hidden="true" />
      <div className="roadmap-layout">
        <div className="roadmap-map-pane">
          <div className="roadmap-intro">
            <div className="roadmap-title-block">
              <p className="roadmap-eyebrow">Roadmap</p>
              <h1>The AI Engineering Map</h1>
              <p>AI Engineering is a connected system of ideas. You don’t need to master everything at once — first see how the pieces fit together, then dive deeper step by step.</p>
            </div>
            <div className="roadmap-instruction">
              <span className="instruction-pointer" aria-hidden="true">↖</span>
              <div><strong>Click a concept to explore</strong><p>See a quick overview, why it matters, and where each concept leads.</p></div>
            </div>
          </div>
          <RoadmapGraph selected={selected} onSelect={selectConcept}/>
        </div>

        {selected && <>
          {isMobile && <button className="sheet-scrim" type="button" aria-label="Close concept details" onClick={closeInspector}/>} 
          <ConceptInspector concept={selected} isMobile={isMobile} onClose={closeInspector}/>
        </>}
      </div>
    </main>
  );
}

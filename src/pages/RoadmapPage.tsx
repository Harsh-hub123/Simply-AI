import { useEffect, useRef, useState } from 'react';
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
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return mobile;
}

export function RoadmapPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useMobileSheet();
  const mapPaneRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const selected = conceptBySlug.get(searchParams.get('concept') ?? '') ?? null;

  useEffect(() => {
    if (!isMobile || !selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMobile, selected?.slug]);

  useEffect(() => {
    const pane = mapPaneRef.current;
    if (!pane || !isMobile || !selected) return;
    pane.inert = true;
    const header = document.querySelector<HTMLElement>('.site-header');
    if (header) header.inert = true;
    return () => { pane.inert = false; if (header) header.inert = false; };
  }, [isMobile, selected?.slug]);

  const selectConcept = (concept: RoadmapConcept) => {
    if (!selected) openerRef.current = document.activeElement as HTMLElement;
    setSearchParams({ concept: concept.slug }, { replace: Boolean(selected) });
  };

  const closeInspector = () => {
    const lastSlug = selected?.slug;
    setSearchParams({}, { replace: true });
    window.requestAnimationFrame(() => {
      const opener = openerRef.current;
      if (opener?.isConnected) opener.focus();
      else if (lastSlug) document.getElementById(`roadmap-node-${lastSlug}`)?.focus();
      openerRef.current = null;
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
    <main id="main-content" tabIndex={-1} className={`roadmap-page${selected ? ' has-selection' : ''}`}>
      <div className="roadmap-atmosphere" aria-hidden="true" />
      <div className="roadmap-layout">
        <div className="roadmap-map-pane" ref={mapPaneRef}>
          <div className="roadmap-intro">
            <div className="roadmap-title-block">
              <h1>The AI Engineering <em>Map</em></h1>
              <p>AI Engineering is a connected system of ideas.</p>
            </div>
            {!selected && <div className="roadmap-instruction">
              <span className="instruction-pointer" aria-hidden="true">✧</span>
              <div><strong><span className="desktop-instruction">Select</span><span className="mobile-instruction">Tap</span> a concept to explore</strong><p>See what it means, why it matters, and what comes next.</p></div>
            </div>}
          </div>
          <RoadmapGraph selected={selected} onSelect={selectConcept}/>
        </div>
        {selected && <>
          {isMobile && <button className="sheet-scrim" type="button" tabIndex={-1} aria-label="Close concept details" onClick={closeInspector}/>}
          <ConceptInspector concept={selected} isMobile={isMobile} onClose={closeInspector} onSelect={selectConcept}/>
        </>}
      </div>
    </main>
  );
}

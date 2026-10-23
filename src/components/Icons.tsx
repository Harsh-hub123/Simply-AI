type IconName = 'intuition' | 'connected' | 'doing' | 'brain' | 'network' | 'clarity' | 'engaging' | 'map' | 'why' | 'visual';

export function LineIcon({ name }: { name: IconName }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<IconName, React.ReactNode> = {
    intuition: <><path {...common} d="M12 3.3a7 7 0 0 0-4.2 12.6c1 .8 1.5 1.7 1.6 2.6h5.2c.1-.9.6-1.8 1.6-2.6A7 7 0 0 0 12 3.3Z"/><path {...common} d="M9.6 21h4.8M9.3 18.5h5.4M12 7v5"/></>,
    connected: <><circle {...common} cx="12" cy="5" r="2"/><circle {...common} cx="5" cy="18" r="2"/><circle {...common} cx="19" cy="18" r="2"/><path {...common} d="m11 7-5 9m7-9 5 9M7 18h10"/></>,
    doing: <path {...common} d="m13.5 2-7 11h5l-1 9 7-12h-5l1-8Z"/>,
    brain: <><path {...common} d="M9.5 5.2A3.2 3.2 0 0 0 4.8 8a3.2 3.2 0 0 0 .3 5.9 3.2 3.2 0 0 0 4.4 4.9M14.5 5.2A3.2 3.2 0 0 1 19.2 8a3.2 3.2 0 0 1-.3 5.9 3.2 3.2 0 0 1-4.4 4.9M9.5 5.2v13.6m5-13.6v13.6M7 10h2.5m5 4H17"/></>,
    network: <><circle {...common} cx="6" cy="6" r="2"/><circle {...common} cx="18" cy="5" r="2"/><circle {...common} cx="5" cy="18" r="2"/><circle {...common} cx="18" cy="18" r="2"/><path {...common} d="m8 6 8-.7M6 8v8m2-9 8.5 9.5M7 17l9-10m-9 11h9"/></>,
    clarity: <><circle {...common} cx="11" cy="13" r="7"/><path {...common} d="M11 13l8-8m-4 0h4v4M8.5 13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"/></>,
    engaging: <><path {...common} d="M5 20v-5h3v5H5Zm6 0V9h3v11h-3Zm6 0V4h3v16h-3Z"/><path {...common} d="m5 11 5-4 4 1 5-5"/></>,
    map: <><path {...common} d="m3 6 5-2 8 2 5-2v14l-5 2-8-2-5 2V6Z"/><path {...common} d="M8 4v14m8-12v14"/></>,
    why: <><path {...common} d="M9.2 8.5a3 3 0 1 1 4.2 2.75c-1 .5-1.4 1.1-1.4 2.25"/><path {...common} d="M12 17.5v.1"/><circle {...common} cx="12" cy="12" r="9"/></>,
    visual: <><path {...common} d="M6 3h9l3 3v15H6V3Z"/><path {...common} d="M15 3v4h4M9 11h6m-6 3h6m-6 3h4"/></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

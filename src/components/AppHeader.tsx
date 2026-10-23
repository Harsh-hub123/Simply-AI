import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/learn', label: 'Learn' },
  { to: '/support', label: 'Support' },
];

export function AppHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="Simply AI home">
          <span>Simply</span> <em>AI</em>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <i />
          <i />
        </button>

        <nav id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <p className="header-credo" aria-label="Our learning approach">
          Build Intuition <span>·</span> See the Big Picture <span>·</span> Go Deeper
        </p>
      </div>
    </header>
  );
}

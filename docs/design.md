# Simply AI visual system

## Home V1 reference read

- **Structure:** one restrained global header; a 45/55 split hero; a three-item principles band; a four-step learning-method band. Sections share the same wide page grid and horizontal dividers.
- **Proportions:** content sits in a centered ~1440px frame with 5–6vw side gutters. The hero occupies roughly 57–63vh on desktop. Copy is intentionally narrower than the concept network.
- **Typography:** a high-contrast editorial serif carries the wordmark, hero and item headings. A clean humanist sans carries navigation, labels and body text. Display sizes are fluid; the hero is ~64–78px on large desktop.
- **Color:** graphite navy `#061019`; warm paper `#f1eee6`; cool text `#a8b1bb`; cyan `#20c8dc`; quiet cyan `#72c9d2`; restrained amber `#d7aa60`. Cyan is an information accent, not a wash.
- **Spacing:** 8px base rhythm. Major gaps use 32/48/64px; dense information bands use 24–32px. Body measures stay near 60 characters.
- **Edges:** 1px blue-gray dividers at low opacity; CTA and icon circles use crisp strokes. Radii remain modest (8–12px), with no floating glass cards.
- **Hero:** eyebrow, dominant two-line statement, rule-accented deck, audience line, then filled/outline CTAs. The map is a composed technical diagram, not an illustration panel.
- **Navigation:** wordmark left, primary links center-left, short product credo right. Active state is a fine cyan baseline. Mobile uses a compact disclosure menu.
- **CTA hierarchy:** cyan filled primary; transparent outlined secondary. Both use clear focus rings and restrained lift on hover.
- **Concept network:** `AI Systems` anchors the center. Data Representation, Model, Loss and Gradient are high-emphasis satellites connected by curved SVG paths; tertiary ideas sit on quieter branches. Amber marks evaluation/loss relationships, cyan marks systems/learning.
- **Lower sections:** labels sit on the shared left axis with a short cyan rule. Content is horizontal and editorial—icon medallion, serif title, short copy, subtle separators—never card-like. The second band explains the four-stage learning method rather than repeating product promises.
- **Responsive:** at tablet the hero stacks and the diagram uses a stable aspect ratio. On mobile, the header becomes a disclosure menu, CTAs stack, tertiary map labels reduce, and lower bands become one-column rows with horizontal separators.
- **Reusable foundations:** `AppHeader`, `SectionLabel`, CTA styles, icon medallions, information items and the page-container/grid tokens should carry into Roadmap and Learn.

## Tokens

```css
--ink: #061019;
--paper: #f1eee6;
--muted: #a8b1bb;
--cyan: #20c8dc;
--amber: #d7aa60;
--line: rgba(118, 167, 182, .18);
--display: Georgia, 'Times New Roman', serif;
--sans: 'Segoe UI Variable', 'Aptos', 'Helvetica Neue', sans-serif;
```

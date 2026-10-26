# Simply AI visual system

## Home V1 reference read

- **Structure:** one restrained global header; a 45/55 split hero; the original three-item principles band; a three-step learning-process band. Sections share the same wide page grid and horizontal dividers.
- **Proportions:** content sits in a centered ~1480px frame with responsive side gutters. At the 1672×941 reference viewport, the header is 70px, hero is 520px, principles band is 180px, and learning-method band is 170px. Copy is intentionally narrower than the concept network.
- **Typography:** a high-contrast editorial serif carries the wordmark, hero and item headings. A clean humanist sans carries navigation, labels and body text. Display sizes are fluid; the hero is ~64–78px on large desktop.
- **Color:** graphite navy `#061019`; warm paper `#f1eee6`; cool text `#a8b1bb`; cyan `#20c8dc`; quiet cyan `#72c9d2`; restrained amber `#d7aa60`. Cyan is an information accent, not a wash.
- **Spacing:** 8px base rhythm. Major gaps use 32/48/64px; dense information bands use 24–32px. Body measures stay near 60 characters.
- **Edges:** 1px blue-gray dividers at low opacity; CTA and icon circles use crisp strokes. Radii remain modest (8–12px), with no floating glass cards.
- **Hero:** eyebrow, dominant two-line statement with the full second line in cyan, concise editorial deck, stacked audience label/value, then filled/outline CTAs. The map is a composed technical diagram, not an illustration panel.
- **Navigation:** wordmark left, primary links center-left, short product credo right. Active state is a fine cyan baseline. Mobile uses a compact disclosure menu.
- **CTA hierarchy:** cyan filled primary; transparent outlined secondary. Both use clear focus rings and restrained lift on hover.
- **Concept network:** the amber circular `AI Systems` node anchors the center. Data Representation, Model, Loss and Gradient use compact cyan-outlined rectangular cards connected by directional SVG paths; tertiary ideas sit on quieter orbital branches. Amber marks evaluation/result relationships, while cyan marks systems and learning.
- **Lower sections:** labels sit on the shared left axis. Both sections place an icon medallion beside a serif title and short copy, using the same column boundaries, top alignment, and subtle separators. There are no numbered steps, connectors, or card containers.
- **Responsive:** at tablet the hero stacks and the diagram uses a stable aspect ratio. On mobile, the header becomes a disclosure menu, CTAs stack, tertiary map labels reduce, and lower bands become one-column rows with horizontal separators.
- **Reusable foundations:** `AppHeader`, `SectionLabel`, CTA styles, icon medallions, information items and the page-container/grid tokens should carry into Roadmap and Learn.

## Home lower-section refinement

- **Principles:** “What makes Simply AI different” retains its original content: “Intuition First,” “Connected Understanding,” and “Learn by Doing.” Use the existing lightbulb, connected-nodes, and lightning icons, original desktop proportions, and responsive stacking.
- **Methods:** “How you’ll learn” uses an unordered list of three complementary methods: Explore Examples, Try Experiments, and Check Your Understanding. Use decorative open-book, adjustment-sliders, and speech-bubble-with-check SVG icons in the existing cyan circular medallions, beside their text columns. There is no supporting line, numbering, or connector. Preserve the concise descriptions and static presentation.
- **Responsive methods:** reuse the principles’ grid and item styles for matching icon sizes, gaps, column boundaries, and desktop separators. Follow the same three-column desktop, two-column tablet, and one-column mobile layouts, keeping icons beside naturally wrapped text.
- **Supporting typography:** both sections share regular-weight 22px serif item headings at 1.25 line-height, 16px serif body copy at 1.5 line-height, and an 8px heading-to-description gap. All items align their icons and text columns at the top. Keep the cyan section labels, existing separators, natural wrapping, and responsive stacking.
- **Hero glyphs:** the tight line-height extends descenders beyond the gradient text span’s paint area. Give `.headline-accent` 0.16em of bottom padding and the matching negative margin so glyphs paint fully without changing font size, line breaks, or overall layout. No global overflow change is needed.
- **Scope:** `HomeSections.module.css` owns supporting-section typography and the methods layout; principles retain their original grid. The hero fix only extends its gradient paint area. Concept network, navigation, availability states, Roadmap, shared colors, and font families remain unchanged.

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

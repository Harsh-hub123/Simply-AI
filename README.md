# Simply AI

**Understand AI. Don't just use it.** Simply AI is an interactive frontend for building intuition about AI engineering. The current product has a Home window and an explorable, ten-concept Roadmap. Learn and Support are navigation placeholders for later phases.

**Public site:** [harsh-hub123.github.io/Simply-AI](https://harsh-hub123.github.io/Simply-AI/#/)

## What is implemented

| Window | Status | What it does |
| --- | --- | --- |
| Home | Implemented | Introduces the learning approach, displays an interactive AI systems network, and links to Learn and Roadmap. |
| Roadmap | Implemented | Shows ten concepts across four territories, a primary learning path, related connections, and a concept inspector with a distinct mini visual for each concept. |
| Learn | Placeholder | Receives the Home CTA and concept-specific links from Roadmap; learning content is not implemented yet. |
| Support | Placeholder | Navigation destination reserved for a later phase. |

The Roadmap sequence is Mathematics → Data Representation → Model → Loss → Gradient → Optimization → Neural Networks → Representation Learning → Modern AI Models → Modern AI Systems. Concept content, ordering, territories, mini-visual data, and destination links live in [`src/data/roadmapConcepts.ts`](src/data/roadmapConcepts.ts).

## Run locally

Use **Node.js 22** (the version used by the deployment workflow) and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`. The dev server listens on `0.0.0.0`; Vite may choose another port if 5173 is occupied.

On Windows PowerShell, if `npm` is blocked because PowerShell cannot run `npm.ps1`, use `npm.cmd ci` and `npm.cmd run dev`. This does not require changing the system execution policy.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check with `tsc -b` and create a production build in `dist/`. |
| `npm run preview` | Serve the built `dist/` folder locally. Build first. |

There is currently **no automated test or lint script** in `package.json`; a successful build is the repository's existing command-line validation gate.

## Routes and interaction

The app uses React Router. Local development uses browser-history URLs; the GitHub Pages build uses hash URLs because Pages serves this project as static files from a repository subpath.

| View | Local URL | Published URL path |
| --- | --- | --- |
| Home | `/` | `/#/` |
| Roadmap | `/roadmap` | `/#/roadmap` |
| Selected Roadmap concept | `/roadmap?concept=gradient` | `/#/roadmap?concept=gradient` |
| Learn placeholder | `/learn` | `/#/learn` |
| Support placeholder | `/support` | `/#/support` |

The Home network's major concepts link directly to their Roadmap inspector through `?concept=<slug>`. On Roadmap, selecting a node updates that query parameter; a valid direct link opens its inspector. An unknown slug leaves the map in its default state. The inspector's **Connects next** control selects the next concept, and **Learn this concept** goes to `/learn?concept=<slug>`; Learn currently remains a placeholder. Closing the inspector clears the query parameter. Escape also closes it.

On narrow screens, the map scrolls horizontally and brings a selected node into view. Its inspector becomes a scrollable modal bottom sheet. The map and header are inert while the sheet is open, focus stays in the sheet, and focus returns to the opening node when it closes.

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml  # Build and publish on main
├── docs/design.md                       # Shared visual rules and tokens
├── src/
│   ├── main.tsx                         # React entry; router mode selection
│   ├── App.tsx                          # Shared shell and routes
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RoadmapPage.tsx
│   │   └── PlaceholderPage.tsx
│   ├── components/
│   │   ├── AppHeader.tsx                 # Shared navigation
│   │   ├── HomeHero.tsx
│   │   ├── ConceptNetwork.tsx            # Home HTML/SVG diagram
│   │   ├── Icons.tsx
│   │   ├── SectionLabel.tsx
│   │   └── roadmap/
│   │       ├── RoadmapGraph.tsx          # Territories, nodes, SVG paths
│   │       ├── ConceptInspector.tsx      # Concept detail panel/sheet
│   │       └── ConceptVisual.tsx         # Ten educational mini visuals
│   ├── data/roadmapConcepts.ts           # Typed concept content and order
│   ├── styles.css                        # Global, header, Home, responsive styles
│   └── roadmap.css                       # Roadmap and inspector styles
├── index.html
├── package.json
└── vite.config.ts
```

### How the pieces connect

`App.tsx` renders one shared `AppHeader` and the active route. Home is assembled from `HomeHero`, `ConceptNetwork`, and two editorial information bands. `RoadmapPage` reads the `concept` query parameter and passes the selected concept to `RoadmapGraph` and `ConceptInspector`. The inspector renders its text and `ConceptVisual` from the same typed concept record. All diagram paths and nodes are real HTML/SVG/CSS, not screenshot assets.

The visual system is recorded in [`docs/design.md`](docs/design.md): navy/graphite surfaces, warm off-white text, restrained cyan and amber, editorial serif headings, technical lines, and responsive layouts. Global design tokens are defined in `src/styles.css`; Roadmap-specific rules are in `src/roadmap.css`.

## Updating the Roadmap

1. Edit the relevant record in `src/data/roadmapConcepts.ts`. Keep its `slug` stable if existing shared URLs should continue to work.
2. For a new concept, supply a unique `id`, `slug`, `order`, territory, copy, icon, `visual`, and `learnRoute`. Set `nextConcept` only when there is a next step.
3. Add or adjust its position and connection geometry in `RoadmapGraph.tsx`; the current path and ten node positions are defined there.
4. If adding a new visual *kind*, extend the `ConceptVisual` union in the data file and the renderer in `ConceptVisual.tsx`, then style it in `roadmap.css`.
5. Run `npm run build` and inspect the default map, selected inspector, and mobile sheet. Check direct links and keyboard navigation.

The current `learnRoute` values point to the Learn placeholder. They preserve the selected concept in the URL for future Learn implementation; they do not yet open a lesson.

## Accessibility and responsive behavior

- Semantic navigation, headings, links, buttons, and descriptive labels support keyboard and screen-reader use.
- A **Skip to main content** link appears on focus; interactive nodes and CTAs have visible focus states.
- Home concept links respond to hover and focus. Roadmap nodes are buttons; the selected node is marked with `aria-current="step"`.
- Each Roadmap mini visual has a text alternative via its figure label.
- The mobile inspector uses dialog semantics, focus containment, Escape/close behavior, and body scroll lock.
- Motion is reduced when `prefers-reduced-motion: reduce` is active, including the map's auto-scroll behavior.
- Desktop layouts use wide editorial compositions; tablet and mobile reorganize the Home hero and use a horizontally scrollable Roadmap.

## Build and deploy

The Vite configuration sets `base: './'`, so built assets work under the `/Simply-AI/` project path. `src/main.tsx` selects `HashRouter` only when `VITE_ROUTER_MODE=hash`; otherwise it uses `BrowserRouter`.

Pushes to `main` trigger [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow installs dependencies with `npm ci`, runs the build with `VITE_ROUTER_MODE=hash`, uploads `dist/`, and deploys it to GitHub Pages. It can also be started manually with **Actions → Deploy Simply AI to GitHub Pages → Run workflow**. The repository's **Settings → Pages** source must be **GitHub Actions**.

To reproduce a Pages-style build locally:

```bash
VITE_ROUTER_MODE=hash npm run build
npm run preview
```

In PowerShell:

```powershell
$env:VITE_ROUTER_MODE = 'hash'
npm.cmd run build
npm.cmd run preview
```

Open the preview URL with `/#/` appended. The published site is public and static; this repository does not currently contain a server, authentication flow, or lesson backend.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `npm.ps1 cannot be loaded` in PowerShell | Run `npm.cmd` instead of `npm`. |
| `npm` or `node` is not recognized | Install Node.js 22 and open a new terminal; confirm with `node --version`. |
| Local port 5173 is in use | Open the alternate URL Vite prints. |
| A published deep link does not open | Use the hash form, such as `https://harsh-hub123.github.io/Simply-AI/#/roadmap?concept=gradient`. |
| A new commit is not visible on Pages | Check the latest run in **GitHub → Actions** and the Pages source setting. Then refresh the browser. |
| Learn or Support shows a simple message | Those routes are intentionally placeholders in the current build. |

## Current scope

Simply AI is a frontend prototype focused on the Home and Roadmap learning experience. Lessons, progress tracking, accounts, search, and Support content are not implemented. The current repository has no backend services and no automated test suite.

# Learn — Block 01, Mathematics for AI

Learn implements the five approved Mathematics screens. Header, Home and Roadmap Mathematics entry links open the available topic; the other nine lessons remain planned.

## Routes and navigation

- `/learn` opens the first Mathematics screen.
- `/learn?topic=mathematics&step=1` through `step=5` are directly linkable screens.
- The existing `/learn?concept=mathematics` link also opens screen 1.
- Other `topic` or `concept` values show planned-topic messaging with a working Mathematics link.
- Back/Continue push router history. Refresh and browser Back/Forward restore the screen from the URL. Invalid step values safely show screen 1.
- Each screen change focuses its h1 and resets the document scroll. Content scrolls naturally; no fixed lesson height crops it.
- Mathematics is an expandable topic with five named step links; its control only expands/collapses the list. The current link uses `aria-current="step"`. Nine unavailable topics are grouped under an initially collapsed upcoming-topics control.
- On small screens the inline topic navigation opens through a labelled button. Escape or closing the navigation restores trigger focus. Selecting a step closes the navigation and focuses its lesson heading, including when selecting the current step.
- A compact sticky Mathematics / Step X of 5 context bar keeps orientation while reading. The application header scrolls normally; on mobile the sticky topic trigger sits above the context bar. Focus targets have local scroll margins.
- Instructional paragraphs use at least 16px. The house image is restrained, the vector receives more space, supporting function examples use quieter surfaces, probability cases share equal track widths, and the recap uncertainty explanation and reflection have dedicated reading space.
- The final Data Representation CTA is disabled, with an adjacent “Next topic planned” status. No account state, saved progress, completion counts, grading or lessons for other topics are implemented.

## Design and content rules

Screen 1 is the colour authority: near-black navy `#000c13`, panel fill `#01121d`, quiet raised fill `#031a27`, cyan `#00d4e5`, ivory `#f2f0eb`, and gold `#ffca48`. These local tokens are defined once in `Learn.module.css` and apply to every screen. Existing global typography families and the real application header are reused.

The screen content lives in `LearnPage.tsx`; diagrams live in `LessonVisuals.tsx`. Both use the scoped Learn stylesheet. No new package is required.

Screens 3 and 4 use a downward reading sequence with natural section heights. Screen 3 groups the small examples with Function and the unchanged-rule two-row diagram with Change. Screen 4 groups the supporting dog thumbnail, initial estimates and prediction mistake together, followed by a full-width probability comparison and its explanation. These layout-only groups preserve all approved wording, diagrams, labels and values; Screens 1, 2 and 5 retain their layouts.

The approved order is:

1. Why does AI need mathematics?
2. One number is useful. But the world rarely fits into one number.
3. Mathematics helps us describe relationships and change.
4. A prediction is not the truth.
5. The big picture.

The references were transcribed with the agreed corrections: Step X of 5, related scalar/vector/matrix examples without conversion arrows, matrix rows `[1200, 3, 8]`, `[900, 2, 4]`, `[1500, 4, 6]`, shared age 8 and first-row emphasis, “When the input changes.”, unchanged rule boxes, actual dog photography, Case B 51%/49%, an illustrative-estimates label, and a static reflection prompt. Step dots indicate position in this topic, not stored completion or mastery.

## Local illustrative photographs

Photographs are downloaded into `public/images/learn` so the lesson has no runtime dependency on a photo service. They are illustrative replacements for the reference photographs, not screenshot crops.

- House: [Unsplash source](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9)
- Dog: [Unsplash source](https://images.unsplash.com/photo-1552053831-71594a27632d)
- Mountain: [Unsplash source](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b)

Charts, text, numerical examples, arrows and diagram relationships are HTML/CSS/SVG. Decorative SVGs are hidden from assistive technology; tables retain row/column semantics, percentage values are real text, and the dog image has a descriptive alternative.

# Learn — Block 01, Mathematics for AI

This local review implements only the five approved Mathematics screens. The shared application header, Home availability messaging and Roadmap lesson statuses are intentionally unchanged for this batch.

## Routes and navigation

- `/learn` opens the first Mathematics screen.
- `/learn?topic=mathematics&step=1` through `step=5` are directly linkable screens.
- The existing `/learn?concept=mathematics` link also opens screen 1.
- Other `topic` or `concept` values show planned-topic messaging with a working Mathematics link.
- Back/Continue push router history. Refresh and browser Back/Forward restore the screen from the URL. Invalid step values safely show screen 1.
- Each screen change focuses its h1 and resets the document scroll. Content scrolls naturally; no fixed lesson height crops it.
- On small screens the inline topic navigation opens through a labelled button. Escape closes it and restores focus. Selecting Mathematics focuses the lesson heading, including when the current URL is already screen 1.
- The final Data Representation CTA is disabled, with an adjacent “Next topic planned” status. No account state, saved progress, completion counts, grading or lessons for other topics are implemented.

## Design and content rules

Screen 1 is the colour authority: near-black navy `#000c13`, panel fill `#01121d`, quiet raised fill `#031a27`, cyan `#00d4e5`, ivory `#f2f0eb`, and gold `#ffca48`. These local tokens are defined once in `Learn.module.css` and apply to every screen. Existing global typography families and the real application header are reused.

The screen content lives in `LearnPage.tsx`; diagrams live in `LessonVisuals.tsx`. Both use the scoped Learn stylesheet. No new package is required.

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

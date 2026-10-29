import { useLayoutEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { roadmapConcepts } from '../data/roadmapConcepts';
import { LineIcon } from '../components/Icons';
import { Arrow, Bars, BigPicture, InformationVisual, lessonImage, Matrix, PredictionVisual, Vector } from '../components/learn/LessonVisuals';
import s from '../components/learn/Learn.module.css';

const titles = [<>Why does AI need <mark>mathematics</mark>?</>, <>How do we <mark>organize information</mark> for an AI model?</>, <>Understanding <mark>relationships and change</mark></>, <>A prediction is <mark>not the truth.</mark></>, <>The <mark>big picture.</mark></>];
const nextCopy = [
  ['Numbers are useful. But one number cannot describe everything.', 'So how can mathematics organize many pieces of information together?'],
  ['Now we can organize information mathematically. But AI is not only about storing numbers.', 'How can mathematics help us describe relationships and change?'],
  ['Mathematics helps us organize information, describe relationships and understand change.', 'But how does it help when the answer is uncertain?'],
  ["We’ve now met four different roles mathematics plays in AI.", 'Let’s put the whole picture together.'],
  ['You now have the language. But there is still an important question:', 'How does the real world become something a model can work with?'],
];

function MentalModel({ children, final = false }: { children: React.ReactNode; final?: boolean }) {
  return <aside className={s.mentalModel}><LineIcon name={final ? 'intuition' : 'brain'}/><div><b>{final ? 'Key takeaway' : 'Mental model'}</b><p>{children}</p></div></aside>;
}

function Numbered({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return <section className={s.numbered}><span className={s.sectionNumber} aria-hidden="true">{number}</span><div><h2>{title}</h2>{children}</div></section>;
}

function ScreenOne() {
  return <>
    <div className={s.twoColumns}><div>
      <p>Look around you.</p>
      <ul><li>A house has a size, a location, an age and a price.</li><li>An image contains colours, shapes and patterns.</li><li>A sentence contains words and meaning.</li><li>A sound changes over time.</li></ul>
      <p>We understand these things naturally.</p>
      <p>But a computer needs information to be described in a precise form before it can work with it.</p>
      <p>This is where mathematics becomes useful.</p>
      <p>Mathematics gives us ways to describe information using numbers and to work with those numbers in a consistent way.</p>
      <p>It helps us turn things from the real world into something a computer can process, compare and eventually learn from.</p>
      <h2 className={s.editorialHeading}>Think of mathematics as a <mark>language.</mark></h2>
      <p>Just as we use words to describe ideas to each other, AI systems use mathematical structures to describe and work with information.</p>
      <p>We don’t need to master all of mathematics before understanding AI.<br/>For now, we only need to understand why it is there and what role it plays.</p>
    </div><InformationVisual/></div>
    <MentalModel>Mathematics gives AI a precise language for working with information.</MentalModel>
  </>;
}

function HouseDetailIcon({ name }: { name: 'size' | 'bedrooms' | 'age' }) {
  const paths = {
    size: <><path d="m2 11 10-8 10 8M5 9v12h14V9M9 21v-7h6v7"/></>,
    bedrooms: <><path d="M3 4v17M3 14h18v7M3 10h7a3 3 0 0 1 3 3v1M13 11h6a2 2 0 0 1 2 2v1"/></>,
    age: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h1M12 14h1M16 14h1M8 18h1M12 18h1"/></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ScreenTwo() {
  return <div className={s.screenTwo}>
    <section className={s.houseProfile} aria-label="House example">
      <img className={s.profilePhoto} src={`${import.meta.env.BASE_URL}images/learn/house-dusk.png`} alt="A modern two-storey house with warm illuminated windows at dusk"/>
      <div className={s.profileCopy}>
        <p>Imagine building a model that estimates house prices. To make a prediction, it can use details such as:</p>
        <ul className={s.profileDetails}>
          <li><HouseDetailIcon name="size"/><span>Size: <strong>1,200 sq ft</strong></span></li>
          <li><HouseDetailIcon name="bedrooms"/><span>Bedrooms: <strong>3</strong></span></li>
          <li className={s.ageDetail}><HouseDetailIcon name="age"/><span>Age: <strong>8 years</strong></span></li>
        </ul>
        <p>Mathematics gives us ways to organize these numbers. Let’s start with a single value.</p>
      </div>
    </section>

    <section className={`${s.teachingSection} ${s.scalarPanel}`} aria-labelledby="scalar-heading">
      <div className={s.scalarCopy}>
        <h2 id="scalar-heading">1. <mark>A scalar:</mark> one number</h2>
        <p>Suppose a house is 8 years old.</p>
        <p>The number 8 is a <strong>scalar</strong>. A scalar is simply a single numerical value.</p>
        <p>It could describe a house’s age, its size or its price. Here, it represents just one detail about our house.</p>
      </div>
      <div className={s.scalarExample}><span>8</span><small>Age (years)</small></div>
      <p className={s.scalarCaption}><span><strong>8</strong> <span aria-hidden="true">→</span> One value describing the house’s age</span></p>
    </section>

    <div className={s.teachingPair}>
      <section className={`${s.teachingSection} ${s.pairedPanel}`} aria-labelledby="vector-heading">
        <h2 id="vector-heading">2. <mark>A vector:</mark> an ordered list of numbers</h2>
        <p>To estimate the price, our model can use several details about the same house:</p>
        <ul><li>Size: 1,200 sq ft</li><li>Bedrooms: 3</li><li>Age: 8 years</li></ul>
        <p>We can arrange these numbers into a <strong>vector</strong>:</p>
        <Vector labeled/>
        <p>A vector keeps the values together in a specific order. Here, the first position means size, the second means bedrooms, and the third means age.</p>
        <p>The model can use these values together as information about one house.</p>
        <p className={s.visualCaption}><strong>[1200, 3, 8]</strong> <span aria-hidden="true">→</span> Several details describing one house</p>
      </section>
      <section className={`${s.teachingSection} ${s.pairedPanel}`} aria-labelledby="matrix-heading">
        <h2 id="matrix-heading">3. <mark>A matrix:</mark> numbers arranged in rows and columns</h2>
        <p>Now suppose we have information about several houses:</p>
        <div className={s.matrixScroll}><Matrix detailed/></div>
        <p>The numbers form a <strong>matrix</strong>: a rectangular arrangement of values in rows and columns.</p>
        <p>Here, each row describes one house, and each column holds the same type of detail across houses.</p>
        <p>Arranging the numbers this way gives an AI model a consistent format for working with information about many houses.</p>
      </section>
    </div>

    <aside className={s.whyNote}><LineIcon name="brain"/><div><h2>Why does this matter for AI?</h2><p>The model needs these details arranged consistently. If the first position represents size for one house, it should represent size for every house. Changing the order would mix up what the values represent.</p></div></aside>
    <MentalModel>Mathematics gives us ways to represent and organize data, turning individual details into a structure that AI models can work with.</MentalModel>
  </div>;
}

function ScreenThree() {
  return <div className={s.screenThree}>
    <div className={s.relationshipIntro}>
      <p>So far, we have seen how mathematics can help us organize information. But AI also needs to understand how different pieces of information are related.</p>
      <p>Suppose we are looking at houses. A larger house may often have a higher price than a smaller one. That means there is some relationship between:</p>
      <p className={s.relationshipAccent}>House size <Arrow/> House price</p>
      <p>Mathematics gives us a way to describe relationships like this.</p>
    </div>
    <div className={s.relationshipPanels}>
      <section className={s.relationshipPanel} aria-labelledby="function-heading">
        <header><span aria-hidden="true">01</span><h2 id="function-heading">A relationship can be described as a <em>function</em></h2></header>
        <p>Imagine a simple rule: “Double the number.”</p>
        <p>Give it 3, and you get 6.</p>
        <p>Give it 5, and you get 10.</p>
        <p>The number you provide is the input. The answer you get is the output. The rule connecting them is called a function.</p>
        <div className={s.doublingFlow} role="group" aria-label="Doubling function example">
          <div className={s.relationshipStage}><span className={s.functionNumber}>3</span><small>Input</small></div>
          <Arrow/>
          <div className={s.relationshipStage}><span>Double it</span><small>Function</small></div>
          <Arrow/>
          <div className={s.relationshipStage}><span className={s.functionNumber}>6</span><small>Output</small></div>
        </div>
        <p>An AI model works with the same basic idea. For example:</p>
        <div className={s.houseModelFlow} role="group" aria-label="House-price model example">
          <span>Information about a house</span><Arrow/><span>Model</span><Arrow/><span>Estimated price</span>
        </div>
        <p>In our doubling example, we chose the rule ourselves. During training, an AI model learns how to connect inputs to useful outputs from examples.</p>
      </section>
      <section className={s.relationshipPanel} aria-labelledby="change-heading">
        <header><span aria-hidden="true">02</span><h2 id="change-heading">What happens when the input <em>changes?</em></h2></header>
        <p>Now consider a simple house-price model. Keeping the model unchanged, let’s compare two inputs:</p>
        <p className={s.sameModel}>Same model</p>
        <div className={s.priceComparison}>
          <table>
            <caption className="sr-only">Estimated prices from the same model. The final row shows the change between the two examples.</caption>
            <thead><tr><th scope="col">House size</th><th scope="col">Estimated price</th></tr></thead>
            <tbody><tr><td>1,200 sq ft</td><td>₹50 lakh</td></tr><tr><td>1,500 sq ft</td><td>₹60 lakh</td></tr></tbody>
            <tfoot><tr><td>300 sq ft</td><td>+₹10 lakh</td></tr></tfoot>
          </table>
        </div>
        <p>The house size increased by 300 sq ft, and the estimated price increased by ₹10 lakh.</p>
        <p>This raises a useful question:</p>
        <p className={s.relationshipAccent}>How much does the result change when we change the input?</p>
        <p><strong>Calculus</strong> is a branch of mathematics that helps us study change, including how a small change in one quantity affects another.</p>
        <p>Later, we’ll use this idea to understand how small adjustments to a model can help reduce its error.</p>
        <p>We don’t need formulas yet. For now, remember:</p>
        <p className={s.relationshipConclusion}>Calculus helps us understand how a small change can affect a result.</p>
      </section>
    </div>
    <MentalModel>Mathematics helps us describe <mark>relationships</mark> and understand how a <mark>change</mark> in one quantity affects another.</MentalModel>
  </div>;
}

function ScreenFour() {
  return <>
    <div className={s.readingIntro}><p>So far, we have seen how mathematics helps us:</p><ul><li>organize information</li><li>describe relationships</li><li>understand change</li></ul><p>But there is one more idea that matters deeply in AI:<br/><strong className={s.goldText}>A model does not know the correct answer in advance.</strong><br/>When it sees something new, it uses what it has learned to estimate what the answer is most likely to be. That estimate is a prediction.<br/>Sometimes the prediction is right. Sometimes it is wrong.</p></div>
    <div className={s.readingSections}>
      <Numbered number={1} title="The most likely prediction can still be wrong."><div className={s.predictionGroup}><PredictionVisual/><div><div className={s.predictionComparison}><div><p>Predicted: <em>Cat</em> — 58%</p><p>Actual: <em>Dog</em></p></div><strong>Prediction ≠<br/>Correct answer</strong></div><p>The model’s best guess was Cat.<br/>But its best guess was still wrong.<br/>A model does not produce truth. It produces a prediction based on the information available to it and what it has learned.</p></div></div></Numbered>
      <Numbered number={2} title="This is where probability becomes useful."><p>Probability helps us describe uncertainty by showing how likely different outcomes appear to be.</p><div className={s.cases}><div><b>Case A</b><Bars values={[["Cat", 99], ["Dog", 1]]}/></div><div><b>Case B</b><Bars values={[["Cat", 51], ["Dog", 49]]}/></div></div><p>Both cases would lead to the prediction Cat.<br/>But they are clearly not telling us the same thing.<br/><strong className={s.goldText}>The prediction is the same. The uncertainty is not.</strong><br/>That is why probability matters.</p></Numbered>
      <Numbered number={3} title="Why does this matter in AI?"><p>Real-world information can be incomplete, noisy, ambiguous or unfamiliar. So AI systems often have to make predictions without perfect information.<br/><strong className={s.goldText}>Probability gives us a mathematical language for uncertainty.</strong> A high probability does not guarantee that a prediction is correct.</p></Numbered>
    </div>
    <MentalModel><strong className={s.goldText}>AI makes predictions, not guarantees.</strong><span className={s.mentalSupporting}>Probability helps us describe how strongly different outcomes are supported when we are uncertain.</span></MentalModel>
  </>;
}

function ScreenFive() {
  return <>
    <p className={s.summaryIntro}>We have seen four important roles mathematics plays in AI. Together, they give AI a precise language<br className={s.wideOnly}/> for working with information, relationships, change and uncertainty.</p>
    <BigPicture/>
    <div className={s.reflections}><aside><LineIcon name="feedback"/><div><h2>You don’t need to master the formulas yet.</h2><p>At this stage, the important thing is that when mathematics appears later in AI, it no longer feels disconnected. You know why it is there.</p></div></aside><aside><LineIcon name="why"/><div><p>Before moving on, can you explain in your own words why AI needs mathematics?</p><p className={s.thinkingPrompt}>Take a moment to think about it...</p></div></aside></div>
    <MentalModel final><mark>Mathematics gives AI a precise language</mark> for working with information, relationships, change and uncertainty.</MentalModel>
  </>;
}

const screens = [ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ScreenFive];
const stepLabels = ['Why mathematics?', 'Organizing information', 'Relationships and change', 'Uncertainty', 'The big picture'];

export function LearnPage() {
  const [params, setParams] = useSearchParams();
  const requestedTopic = params.get('topic') ?? params.get('concept') ?? 'mathematics';
  const isPlanned = requestedTopic !== 'mathematics';
  const rawStep = Number(params.get('step') ?? '1');
  const step = Number.isInteger(rawStep) && rawStep >= 1 && rawStep <= 5 ? rawStep : 1;
  const headingRef = useRef<HTMLHeadingElement>(null);
  const navigationRef = useRef<HTMLButtonElement>(null);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mathematicsOpen, setMathematicsOpen] = useState(!isPlanned);
  const [upcomingOpen, setUpcomingOpen] = useState(false);
  const Screen = screens[step - 1];

  useLayoutEffect(() => {
    setTopicsOpen(false);
    if (!isPlanned) setMathematicsOpen(true);
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step, requestedTopic]);

  const goToStep = (value: number) => setParams({ topic: 'mathematics', step: String(value) });
  const selectStep = () => {
    setTopicsOpen(false);
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const closeTopics = () => {
    setTopicsOpen(false);
    navigationRef.current?.focus({ preventScroll: true });
  };

  return <main id="main-content" tabIndex={-1} className={s.learn}>
    <aside className={s.sidebar}>
      <button ref={navigationRef} className={s.topicToggle} type="button" aria-expanded={topicsOpen} aria-controls="learn-topics" onClick={() => topicsOpen ? closeTopics() : setTopicsOpen(true)} onKeyDown={event => { if (event.key === 'Escape') closeTopics(); }}>Block 01 · Mathematics <span aria-hidden="true">{topicsOpen ? '−' : '+'}</span><span className="sr-only"> — Topic navigation</span></button>
      <div id="learn-topics" className={`${s.topicNavigation} ${topicsOpen ? s.topicsOpen : ''}`} onKeyDown={event => { if (event.key === 'Escape' && topicsOpen) { event.stopPropagation(); closeTopics(); } }}>
        <h2>Learn</h2><p>A structured path from<br/>foundations to real AI systems.</p>
        <nav className={s.block} aria-label="Block 01 topics">
          <header><span aria-hidden="true">▣</span><div><b>Block 01</b><p>AI Engineering Foundations</p></div></header>
          <div className={s.topicGroup}>
            <button className={`${s.topicControl} ${!isPlanned ? s.currentTopic : ''}`} type="button" aria-expanded={mathematicsOpen} aria-controls="mathematics-steps" onClick={() => setMathematicsOpen(!mathematicsOpen)}><span>01</span><strong>Mathematics</strong><span aria-hidden="true">{mathematicsOpen ? '−' : '+'}</span></button>
            <ol id="mathematics-steps" className={s.stepLinks} hidden={!mathematicsOpen}>{stepLabels.map((label, index) => <li key={label}><Link to={`/learn?topic=mathematics&step=${index + 1}`} aria-current={!isPlanned && step === index + 1 ? 'step' : undefined} onClick={selectStep}><span aria-hidden="true">{index + 1}</span>{label}</Link></li>)}</ol>
          </div>
          <div className={s.upcomingGroup}>
            <button className={s.upcomingControl} type="button" aria-expanded={upcomingOpen} aria-controls="upcoming-topics" onClick={() => setUpcomingOpen(!upcomingOpen)}>Upcoming topics · 9 planned <span aria-hidden="true">{upcomingOpen ? '−' : '+'}</span></button>
            <ol id="upcoming-topics" hidden={!upcomingOpen}>{roadmapConcepts.slice(1).map(concept => <li key={concept.slug}><span className={s.plannedTopic} aria-disabled="true"><span>{concept.id}</span><span>{concept.title}<small>Planned</small></span></span></li>)}</ol>
          </div>
        </nav>
        <p className={s.laterBlocks}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3"/></svg> More learning blocks later</p>
      </div>
    </aside>
    <article className={s.lesson} data-step={step}>
      <div className={s.lessonMeta} aria-label="Lesson context"><p><b>Block 01</b><span>/</span>Mathematics</p>{!isPlanned && <div className={s.stepStatus}><span>Step {step} of 5</span><span className={s.stepDots} aria-hidden="true">{screens.map((_, index) => <i className={index + 1 === step ? s.activeDot : ''} key={index}/>)}</span></div>}</div>
      {isPlanned ? <><h1 ref={headingRef} tabIndex={-1}>This topic is planned.</h1><p>Mathematics for AI is available to explore. More topics are being developed.</p><Link className={s.continueButton} to="/learn?topic=mathematics&step=1">Explore Mathematics for AI <Arrow/></Link></> : <>
        <h1 ref={headingRef} tabIndex={-1} className={step === 2 ? s.longTitle : ''}>{titles[step - 1]}</h1>
        <Screen/>
        <footer className={s.lessonFooter}>
          <button type="button" className={s.backButton} disabled={step === 1} onClick={() => goToStep(step - 1)}><span aria-hidden="true">‹</span>Back</button>
          <div className={s.nextThought}><b>Next</b><div>{nextCopy[step - 1].slice(0, -1).map(line => <p key={line}>{line}</p>)}<p className={s.nextQuestion}>{nextCopy[step - 1].at(-1)}</p></div></div>
          <div className={s.continueWrap}><button type="button" className={s.continueButton} disabled={step === 5} aria-describedby={step === 5 ? 'next-topic-status' : undefined} onClick={() => goToStep(step + 1)}>{step === 5 ? 'Continue to Data Representation' : step === 4 ? 'See What You’ve Learned' : 'Continue'}<Arrow/></button>{step === 5 && <span id="next-topic-status">Next topic planned</span>}</div>
        </footer>
      </>}
    </article>
  </main>;
}

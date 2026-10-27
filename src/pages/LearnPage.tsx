import { useLayoutEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { roadmapConcepts } from '../data/roadmapConcepts';
import { LineIcon } from '../components/Icons';
import { Arrow, Bars, BigPicture, Flow, FunctionVisual, InformationVisual, lessonImage, Matrix, PredictionVisual, Vector } from '../components/learn/LessonVisuals';
import s from '../components/learn/Learn.module.css';

const titles = [<>Why does AI need <mark>mathematics</mark>?</>, <>One number is useful.<br/>But the world rarely fits into <mark>one number.</mark></>, <>Mathematics helps us describe <mark>relationships</mark> and <mark>change.</mark></>, <>A prediction is <mark>not the truth.</mark></>, <>The <mark>big picture.</mark></>];
const nextCopy = [
  ['Numbers are useful. But one number cannot describe everything.', 'So how can mathematics organize many pieces of information together?'],
  ['Now we can organize information mathematically. But AI is not only about storing numbers.', 'How can mathematics help us describe relationships and change?'],
  ['We can now use mathematics to: organize information · describe relationships · understand change', 'But not every prediction is completely certain.', 'How can mathematics help us reason when there is uncertainty?'],
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

function ScreenTwo() {
  return <>
    <div className={`${s.twoColumns} ${s.houseIntro}`}><div><p>Imagine describing a house.<br/>Its price could be one number.<br/>But if we want to describe the house itself,<br/>we may care about several things:</p><ul><li>Size: 1200 sq ft</li><li>Bedrooms: 3</li><li>Age: <mark>8</mark> years</li></ul><p>Instead of treating these values separately,<br/>mathematics gives us ways to organize them together.</p></div><img className={s.housePhoto} src={lessonImage('house')} alt="A modern house, representing one example with size, bedrooms and age"/></div>
    <div className={s.exampleGrid}>
      <section className={s.exampleCard}><h2><span>1</span>One value</h2><div className={s.exampleDisplay}><div className={s.scalar}><mark>8</mark></div><h3>Scalar</h3><span>One value</span></div><p>A single number is called a <em>scalar</em>.<br/>For example, 8 could represent<br/>the age of one house.</p></section>
      <section className={s.exampleCard}><h2><span>2</span>Several related values</h2><div className={s.exampleDisplay}><Vector/><h3>Vector</h3><span>Several related values</span></div><p>When these values belong together, we can arrange them as an ordered list. For example, <em>[ 1200, 3, 8 ]</em> keeps the house’s size, bedrooms and age together. Mathematics calls this a <em>vector</em>. The important idea is that several related pieces of information can be kept together as one structured object.</p></section>
      <section className={s.exampleCard}><h2><span>3</span>Many examples</h2><div className={s.exampleDisplay}><Matrix/><h3>Matrix</h3><span>Many examples</span></div><p>If we have information about many houses, we can place those values into rows and columns. This rectangular arrangement is called a <em>matrix</em>. Matrices simply collect many vectors, where each row corresponds to one example.</p></section>
    </div>
    <aside className={s.whyNote}><LineIcon name="intuition"/><div><h2>Why does this matter for AI?</h2><p>AI systems often work with many pieces of information at the same time.<br/>Vectors and matrices give that information an organized structure that computation can work with.</p></div></aside>
    <MentalModel>Mathematics doesn’t just give us numbers. It gives us ways to organize numbers so that information has structure.</MentalModel>
  </>;
}

function ScreenThree() {
  return <>
    <div className={s.twoColumns}><div><p>So far, we have seen how mathematics can help us organize information.<br/>But AI also needs to understand how different pieces of information are related.</p><p>Suppose we are looking at houses.<br/>A larger house may often have a higher price than a smaller one.<br/>That means there is some relationship between:<br/><em>House size → House price</em></p><p>Mathematics gives us a way to describe relationships like this.</p></div><FunctionVisual/></div>
    <div className={s.detailColumns}>
      <Numbered number={1} title="A relationship can be described as a function"><p>A function is simply a rule that takes something in and produces something out.<br/>For example:</p><Flow items={['House size', 'Rule', 'Estimated price']}/><p>We can think of this as:</p><Flow items={['Input', 'Function', 'Output']}/><p>This idea is important in AI because a model also receives information and produces an output.</p><p>For now, the important idea is simple:<br/><em>A function helps us describe how one thing is connected to another.</em></p></Numbered>
      <Numbered number={2} title="When the input changes."><p>Suppose our rule gives:</p><div className={s.inlineExample}>1200 sq ft <Arrow/> ₹ 50L</div><p>Now the house size changes:</p><div className={s.inlineExample}><mark>1500 sq ft</mark><Arrow/><mark>₹ 60L</mark></div><p>The input changed. And the output changed with it.</p><p>Mathematics helps us describe how much one quantity changes when another quantity changes.<br/>This idea of change becomes extremely important later when we learn how AI models improve.<br/>The branch of mathematics that studies change is called <em>calculus</em>.<br/>We do not need the formulas yet.<br/>For now, remember the idea:<br/><em>When something changes, mathematics can help us understand what happens next.</em></p></Numbered>
    </div>
    <MentalModel>Mathematics helps us describe <mark>how things are related</mark> and <mark>how one thing changes when another changes.</mark></MentalModel>
  </>;
}

function ScreenFour() {
  return <>
    <div className={s.twoColumns}><div><p>So far, we have seen how mathematics helps us:</p><ul><li>organize information</li><li>describe relationships</li><li>understand change</li></ul><p>But there is one more idea that matters deeply in AI:<br/><strong className={s.goldText}>A model does not know the correct answer in advance.</strong><br/>When it sees something new, it uses what it has learned to estimate what the answer is most likely to be. That estimate is a prediction.<br/>Sometimes the prediction is right. Sometimes it is wrong.</p></div><PredictionVisual/></div>
    <div className={s.detailColumns}>
      <Numbered number={1} title="The most likely prediction can still be wrong."><div className={s.predictionComparison}><div><p>Predicted: <em>Cat</em> — 58%</p><p>Actual: <em>Dog</em></p></div><strong>Prediction ≠<br/>Correct answer</strong></div><p>The model’s best guess was Cat.<br/>But its best guess was still wrong.<br/>A model does not produce truth. It produces a prediction based on the information available to it and what it has learned.</p></Numbered>
      <Numbered number={2} title="This is where probability becomes useful."><p>Probability helps us describe uncertainty by showing how likely different outcomes appear to be.</p><div className={s.cases}><div><b>Case A</b><Bars values={[["Cat", 99], ["Dog", 1]]}/></div><div><b>Case B</b><Bars values={[["Cat", 51], ["Dog", 49]]}/></div></div><p>Both cases would lead to the prediction Cat.<br/>But they are clearly not telling us the same thing.<br/><strong className={s.goldText}>The prediction is the same. The uncertainty is not.</strong><br/>That is why probability matters.</p></Numbered>
    </div>
    <div className={s.fullDetail}><Numbered number={3} title="Why does this matter in AI?"><p>Real-world information can be incomplete, noisy, ambiguous or unfamiliar. So AI systems often have to make predictions without perfect information.<br/><strong className={s.goldText}>Probability gives us a mathematical language for uncertainty.</strong> A high probability does not guarantee that a prediction is correct.</p></Numbered></div>
    <MentalModel><strong className={s.goldText}>AI makes predictions, not guarantees.</strong><span className={s.mentalSupporting}>Probability helps us describe how strongly different outcomes are supported when the answer is uncertain.</span></MentalModel>
  </>;
}

function ScreenFive() {
  return <>
    <p className={s.summaryIntro}>We have seen four important roles mathematics plays in AI. Together, they give AI a precise language<br className={s.wideOnly}/> for working with information, relationships, change and uncertainty.</p>
    <BigPicture/>
    <div className={s.reflections}><aside><LineIcon name="feedback"/><div><h2>You don’t need to master the formulas yet.</h2><p>At this stage, the important thing is that when mathematics appears later in AI, it no longer feels disconnected. You now know why it is there.</p></div></aside><aside><LineIcon name="why"/><div><p>Before moving on, can you explain in your own words why AI needs mathematics?</p><p className={s.thinkingPrompt}>Take a moment to think about it...</p></div></aside></div>
    <MentalModel final><mark>Mathematics gives AI a precise language</mark> for working with information, relationships, change and uncertainty.</MentalModel>
  </>;
}

const screens = [ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ScreenFive];

export function LearnPage() {
  const [params, setParams] = useSearchParams();
  const requestedTopic = params.get('topic') ?? params.get('concept') ?? 'mathematics';
  const isPlanned = requestedTopic !== 'mathematics';
  const rawStep = Number(params.get('step') ?? '1');
  const step = Number.isInteger(rawStep) && rawStep >= 1 && rawStep <= 5 ? rawStep : 1;
  const headingRef = useRef<HTMLHeadingElement>(null);
  const navigationRef = useRef<HTMLButtonElement>(null);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const Screen = screens[step - 1];

  useLayoutEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step, requestedTopic]);

  const goToStep = (value: number) => setParams({ topic: 'mathematics', step: String(value) });
  const selectMathematics = () => {
    setTopicsOpen(false);
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return <main id="main-content" tabIndex={-1} className={s.learn}>
    <aside className={s.sidebar}>
      <button ref={navigationRef} className={s.topicToggle} type="button" aria-expanded={topicsOpen} aria-controls="learn-topics" onClick={() => setTopicsOpen(!topicsOpen)} onKeyDown={event => { if (event.key === 'Escape') setTopicsOpen(false); }}>Block 01 · Mathematics <span aria-hidden="true">{topicsOpen ? '−' : '+'}</span><span className="sr-only"> — Topic navigation</span></button>
      <div id="learn-topics" className={`${s.topicNavigation} ${topicsOpen ? s.topicsOpen : ''}`} onKeyDown={event => { if (event.key === 'Escape') { setTopicsOpen(false); navigationRef.current?.focus(); } }}>
        <h2>Learn</h2><p>A structured path from<br/>foundations to real AI systems.</p>
        <nav className={s.block} aria-label="Block 01 topics"><header><span aria-hidden="true">▣</span><div><b>Block 01</b><p>AI Engineering Foundations</p></div></header><ol>{roadmapConcepts.map((concept, index) => <li className={index === 0 && !isPlanned ? s.currentTopic : ''} key={concept.slug}>{index === 0 ? <Link to="/learn?topic=mathematics&step=1" aria-current={!isPlanned ? 'page' : undefined} onClick={selectMathematics}><span className={s.topicDot}/><span>{concept.id}</span><span>Mathematics</span></Link> : <span className={s.plannedTopic} aria-disabled="true"><span className={s.topicDot}/><span>{concept.id}</span><span>{concept.title}<small>Planned</small></span></span>}</li>)}</ol></nav>
        <p className={s.laterBlocks}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3"/></svg> More learning blocks later</p>
      </div>
    </aside>
    <article className={s.lesson}>
      <div className={s.lessonMeta}><p><b>Block 01</b><span>/</span>01 · Mathematics for AI</p>{!isPlanned && <div className={s.stepStatus}><span>Step {step} of 5</span><span className={s.stepDots} aria-hidden="true">{screens.map((_, index) => <i className={index + 1 === step ? s.activeDot : index + 1 < step ? s.pastDot : ''} key={index}/>)}</span></div>}</div>
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

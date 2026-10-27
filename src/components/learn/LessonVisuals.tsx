import { LineIcon } from '../Icons';
import s from './Learn.module.css';

export const lessonImage = (name: string) => `${import.meta.env.BASE_URL}images/learn/${name}.jpg`;

export function Arrow() { return <span className={s.arrow} aria-hidden="true">→</span>; }

export function Matrix({ compact = false }: { compact?: boolean }) {
  return <table className={`${s.matrix} ${compact ? s.compactMatrix : ''}`} aria-label="House examples: size, bedrooms and age">
    <thead><tr><th scope="col">Size</th><th scope="col">Bedrooms</th><th scope="col">Age</th></tr></thead>
    <tbody>{[[1200, 3, 8], [900, 2, 4], [1500, 4, 6]].map((row, index) => <tr key={row[0]} className={index === 0 ? s.highlightRow : ''}>{row.map((value, col) => <td key={col}>{index === 0 && col === 2 ? <mark>{value}</mark> : value}</td>)}</tr>)}</tbody>
  </table>;
}

export function Vector() { return <div className={s.vector} aria-label="Vector: 1200, 3, 8"><span aria-hidden="true">[</span><span>1200,</span><span>3,</span><mark>8</mark><span aria-hidden="true">]</span></div>; }

export function Bars({ values = [['Cat', 58], ['Dog', 37], ['Fox', 5]] }: { values?: Array<[string, number]> }) {
  return <dl className={s.bars}>{values.map(([name, value]) => <div key={name}><dt>{name}</dt><dd><span className={s.track} aria-hidden="true"><span className={name === 'Dog' ? s.dogBar : name === 'Fox' ? s.foxBar : ''} style={{ width: `${value}%` }}/></span><span>{value}%</span></dd></div>)}</dl>;
}

export function InformationVisual() {
  return <figure className={s.informationVisual} aria-label="House, image, text and sound are different kinds of real-world information. Mathematics gives us a precise way to describe it.">
    <div className={s.sourceMap}><div className={s.sources}>
      <div className={s.source}><b>House</b><img src={lessonImage('house')} alt="A modern house"/></div>
      <div className={s.source}><b>Image</b><img src={lessonImage('mountain')} alt="Snow-covered mountain peaks"/></div>
      <div className={s.source}><b>Text</b><svg viewBox="0 0 180 75" aria-hidden="true"><path d="M25 15h130M25 30h118M25 45h130M25 60h83" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>
      <div className={s.source}><b>Sound</b><svg viewBox="0 0 200 75" aria-hidden="true"><path d="M5 38h18l4-8 4 18 5-30 5 42 5-37 5 26 5-15 5 4h8l5-23 5 45 5-55 5 65 5-52 5 33 5-17 5 4h7l5-12 5 23 5-32 5 40 5-24 5 12h25" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></div>
    </div>
    <svg className={s.sourceConnections} viewBox="0 0 400 360" preserveAspectRatio="none" aria-hidden="true"><path d="M0 75C-28 75 -28 287 25 302S72 329 72 360M400 75C428 75 428 287 375 302S328 329 328 360M100 306C100 333 155 327 155 360M300 306C300 333 245 327 245 360"/></svg></div>
    <div className={s.visualNode}><LineIcon name="network"/><div><b>Information</b><small>Different kinds of real-world data</small></div></div>
    <span className={`${s.arrow} ${s.down}`} aria-hidden="true">↓</span>
    <div className={`${s.visualNode} ${s.goldNode}`}><span className={s.functionSymbol}>ƒ(x)</span><div><b>Mathematics</b><small>A precise way to describe it</small></div></div>
  </figure>;
}

export function Flow({ items }: { items: string[] }) {
  return <div className={s.flow}>{items.map((item, index) => <div className={s.flowPart} key={`${item}-${index}`}>{index > 0 && <Arrow/>}<span className={s.flowNode}>{item}</span></div>)}</div>;
}

export function FunctionVisual() {
  return <figure className={s.functionVisual} aria-label="The same unchanged function estimates a house price of ₹50L for 1200 square feet and ₹60L for 1500 square feet. The input and output change; the rule stays the same.">
    <figcaption>A function can describe a relationship</figcaption>
    {[['1200 sq ft', '₹ 50L'], ['1500 sq ft', '₹ 60L']].map(([input, output], index) => <div className={`${s.functionRow} ${index === 1 ? s.changed : ''}`} key={input}>
      <div className={s.flowNode}><small>House size</small><strong>{input}</strong></div><Arrow/>
      <div className={s.flowNode}><LineIcon name="sliders"/><span>Function<small>Rule</small></span></div><Arrow/>
      <div className={s.flowNode}><small>Estimated price</small><strong>{output}</strong></div>
    </div>)}
    <div className={s.flowLabels}><span>Input</span><span>Function</span><span>Output</span></div>
    <div className={s.changeStrip}><span><em>Input</em> changed</span><Arrow/><span>Output changed</span></div>
  </figure>;
}

export function PredictionVisual() {
  return <figure className={s.predictionVisual}>
    <img src={lessonImage('dog')} alt="A golden retriever. The actual animal is a dog."/>
    <div><figcaption>Model prediction</figcaption><Bars/><p className={s.small}>Illustrative model estimates</p><div className={s.caution}><b>58% is not certainty.</b><span>Other possibilities still remain.</span></div></div>
  </figure>;
}

export function BigPicture() {
  return <div className={s.bigPicture}>
    <svg className={s.bigConnections} viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><path d="M360 110C450 110 420 200 500 200M360 380C450 380 420 290 500 290M640 110C550 110 580 200 500 200M640 380C550 380 580 290 500 290"/></svg>
    <section className={`${s.summaryCard} ${s.summaryInformation}`}><header><span>01</span><div><h2>Information</h2><p>Mathematics gives us ways<br/>to organize information.</p></div></header><div className={s.miniRepresentations}><span className={s.scalar}><mark>8</mark></span><Vector/><Matrix compact/></div><p>Numbers, vectors and matrices help us<br className={s.wideOnly}/> represent real-world information in a structured way.</p></section>
    <section className={`${s.summaryCard} ${s.summaryRelationships}`}><header><span>02</span><div><h2>Relationships</h2><p>Mathematics gives us ways to describe<br className={s.wideOnly}/> how one thing is connected to another.</p></div></header><Flow items={['Input', 'Function', 'Output']}/><p>Functions and equations help us model<br className={s.wideOnly}/> the relationships between inputs and outputs.</p></section>
    <div className={s.bigCenter}><b>Mathematics<br/>for AI</b><p>A precise language for working with information and real-world problems.</p></div>
    <section className={`${s.summaryCard} ${s.summaryChange}`}><header><span>03</span><div><h2>Change</h2><p>Mathematics helps us understand<br className={s.wideOnly}/> what happens when one quantity changes.</p></div></header><div className={s.summaryChangeBody}><div className={s.changeExamples}><p>1200 sq ft <Arrow/> <em>₹50L</em></p><p><mark>1500 sq ft</mark> <Arrow/> <mark>₹60L</mark></p></div><p>Mathematics helps us measure, compare and understand how changes in inputs affect outputs.</p></div></section>
    <section className={`${s.summaryCard} ${s.summaryUncertainty}`}><header><span>04</span><div><h2>Uncertainty</h2><p>Mathematics helps us reason when the<br className={s.wideOnly}/> answer is not completely certain.</p></div></header><div className={s.summaryUncertaintyBody}><Bars/><p>Probability gives us a way to represent uncertainty when several outcomes are possible.</p></div></section>
  </div>;
}

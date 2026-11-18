import SectionHead from "./SectionHead.jsx";
import { steps } from "../data.jsx";

export default function HowItWorks() {
  return (
    <section className="section section-green" id="how">
      <div className="container">
        <SectionHead light eyebrow="How It Works" title="Three steps, no hassle" />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import SectionHead from "./SectionHead.jsx";
import { skipSizes } from "../data.jsx";

// Side-on skip drawing that grows with the skip's capacity.
function SkipDrawing({ yards }) {
  const scale = 0.55 + yards * 0.06;
  const w = 120 * scale;
  const h = 52 * scale;
  const x = (140 - w) / 2;
  const y = 70 - h;
  const inset = w * 0.16;
  return (
    <svg className="skip-drawing" viewBox="0 0 140 76" aria-hidden="true">
      <line x1="4" y1="71" x2="136" y2="71" className="ground" />
      <path
        d={`M${x} ${y} H${x + w} L${x + w - inset} ${y + h} H${x + inset} Z`}
        className="skip-body"
      />
      <line x1={x + 3} y1={y + h * 0.2} x2={x + w - 3} y2={y + h * 0.2} className="skip-rim" />
    </svg>
  );
}

export default function Sizes() {
  return (
    <section className="section" id="sizes">
      <div className="container">
        <SectionHead
          eyebrow="Our Skips"
          title="Pick the right size"
          intro="Not sure which one you need? Give us a ring, tell us what you're clearing, and we'll point you to the right skip so you're not paying for space you won't use."
        />
        <div className="size-grid">
          {skipSizes.map((s) => (
            <article key={s.name} className={`size-card${s.popular ? " popular" : ""}`}>
              {s.popular && <span className="badge">Most popular</span>}
              <SkipDrawing yards={s.yards} />
              <h3>
                <span className="yards">{s.yards} yard</span>
                {s.name}
              </h3>
              <p className="bags">Holds roughly {s.bags} bin bags</p>
              <p>{s.fit}</p>
              <a href="#quote" className="card-link">Get a price &rarr;</a>
            </article>
          ))}
        </div>
        <figure className="yard-photo">
          <img
            src={`${import.meta.env.BASE_URL}images/skips.jpg`}
            alt="Four yellow Border Skip Hire skips lined up in the yard, from largest to smallest"
            loading="lazy"
          />
          <figcaption>Our skips, ready to go out from the yard.</figcaption>
        </figure>
      </div>
    </section>
  );
}

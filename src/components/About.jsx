import SectionHead from "./SectionHead.jsx";

const lorry = `${import.meta.env.BASE_URL}images/lorry.jpg`;

export default function About() {
  return (
    <section className="section section-tint" id="about">
      <div className="container about-grid">
        <figure className="lorry-photo">
          <img
            src={lorry}
            alt="Border Skip Hire's green and white Scania skip lorry carrying a yellow skip"
            loading="lazy"
          />
        </figure>
        <div>
          <SectionHead eyebrow="About Us" title="Local people, local service" />
          <div className="prose">
            <p>
              Border Skip Hire is a Northern Ireland skip hire company serving homes, farms,
              builders and businesses across South Armagh and South Down.
            </p>
            <p>
              You&rsquo;ll deal with the people who drive the lorry and lift the skip, not a call
              centre. That means straight answers on price, a skip that turns up when we say it
              will, and someone who&rsquo;ll pick up the phone if your plans change.
            </p>
            <p>
              Every load comes back to be sorted, with as much as possible sent for recycling
              rather than landfill.
            </p>
          </div>
          <ul className="about-points">
            <li><strong>Domestic</strong> clear-outs, renovations and garden jobs</li>
            <li><strong>Trade</strong> and building sites, with regular exchanges</li>
            <li><strong>Agricultural</strong> yard and shed clear-outs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

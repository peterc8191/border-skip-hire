import { phones } from "../data.jsx";
import { PhoneIcon } from "./Header.jsx";

const photo = `${import.meta.env.BASE_URL}images/skips.jpg`;

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ "--hero-img": `url(${photo})` }}>
      <div className="container hero-inner">
        <p className="eyebrow">South Armagh &middot; South Down</p>
        <h1>
          Skip hire, <span>sorted.</span>
        </h1>
        <p className="hero-lead">
          Local skip hire covering Newry, Crossmaglen, Warrenpoint, Kilkeel and every
          town and townland in between. Domestic, building and farm waste, delivered and collected
          when it suits you.
        </p>
        <div className="hero-actions">
          {phones.map((p) => (
            <a key={p.href} href={p.href} className={`btn ${p.primary ? "btn-yellow" : "btn-ghost"}`}>
              <PhoneIcon /> {p.label}
            </a>
          ))}
          <a href="#quote" className="btn btn-outline-light">Request a quote</a>
        </div>
        <ul className="hero-points">
          <li>2 to 8 yard skips</li>
          <li>Prompt delivery &amp; collection</li>
          <li>Waste recycled responsibly</li>
        </ul>
      </div>
    </section>
  );
}

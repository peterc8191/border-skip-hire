import SectionHead from "./SectionHead.jsx";
import { areas, phones } from "../data.jsx";

export default function Areas() {
  const main = phones.find((p) => p.primary);
  return (
    <section className="section" id="areas">
      <div className="container">
        <SectionHead
          eyebrow="Where We Cover"
          title="South Armagh & South Down"
          intro="We're local, so we know the back roads, the lanes and the townlands. If you're in or around any of these, we can get a skip to you."
        />
        <div className="area-grid">
          {Object.entries(areas).map(([county, towns]) => (
            <div key={county} className="area-col">
              <h3>{county}</h3>
              <ul className="town-list">
                {towns.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="area-note">
          Don&rsquo;t see your townland? We probably still cover it. Call{" "}
          <a href={main.href}>{main.label}</a> and ask.
        </p>
      </div>
    </section>
  );
}

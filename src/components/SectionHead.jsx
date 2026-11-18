export default function SectionHead({ eyebrow, title, intro, light = false }) {
  return (
    <div className={`section-head${light ? " light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </div>
  );
}

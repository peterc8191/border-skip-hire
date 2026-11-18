import SectionHead from "./SectionHead.jsx";
import { accepted, notAccepted } from "../data.jsx";

export default function Waste() {
  return (
    <section className="section" id="waste">
      <div className="container">
        <SectionHead
          eyebrow="What Goes In"
          title="What you can put in a skip"
          intro="Most everyday waste is fine. A few things need special handling by law, so they can't go in. If you're unsure about anything, ask before you load it."
        />
        <div className="waste-grid">
          <div className="waste-col yes">
            <h3>Yes, that&rsquo;s fine</h3>
            <ul>
              {accepted.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
          <div className="waste-col no">
            <h3>Please keep out</h3>
            <ul>
              {notAccepted.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
        <p className="waste-note">
          Fill skips level with the top. Overloaded skips can&rsquo;t be lifted safely and may
          have to be partly emptied before collection.
        </p>
      </div>
    </section>
  );
}

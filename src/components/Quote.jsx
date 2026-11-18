import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import { phones, skipSizes, whatsappNumber } from "../data.jsx";
import { PhoneIcon } from "./Header.jsx";

// There is no backend, so the form builds a WhatsApp message the visitor
// sends themselves. Nothing is submitted until they press send in WhatsApp.
export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    town: "",
    size: "Not sure, please advise",
    date: "",
    details: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi Border Skip Hire, I'd like a quote for a skip.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Town / townland: ${form.town}`,
      `Skip size: ${form.size}`,
      form.date && `Needed from: ${form.date}`,
      form.details && `Details: ${form.details}`,
    ].filter(Boolean);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <section className="section section-green" id="quote">
      <div className="container quote-grid">
        <div>
          <SectionHead
            light
            eyebrow="Get a Quote"
            title="Need a skip? Let's get you sorted."
            intro="The quickest way is to ring us. Or fill in the form and it'll open WhatsApp with your details ready to send."
          />
          <ul className="quote-phones">
            {phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>
                  <PhoneIcon /> {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" required value={form.name} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={update} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="town">Town or townland</label>
              <input id="town" name="town" required value={form.town} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="date">Needed from</label>
              <input id="date" name="date" type="date" value={form.date} onChange={update} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="size">Skip size</label>
            <select id="size" name="size" value={form.size} onChange={update}>
              <option>Not sure, please advise</option>
              {skipSizes.map((s) => (
                <option key={s.name}>{`${s.yards} yard ${s.name}`}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="details">What are you getting rid of?</label>
            <textarea id="details" name="details" rows={4} value={form.details} onChange={update} />
          </div>
          <button type="submit" className="btn btn-yellow btn-block">Send via WhatsApp</button>
          <p className="form-hint">Opens WhatsApp with your message filled in. Nothing is sent until you press send.</p>
        </form>
      </div>
    </section>
  );
}

import { phones } from "../data.jsx";
import { PhoneIcon } from "./Header.jsx";

// Sticky call / quote bar shown on phones only.
export default function CallBar() {
  const main = phones.find((p) => p.primary);
  return (
    <div className="call-bar">
      <a href={main.href} className="call-bar-call">
        <PhoneIcon /> Call now
      </a>
      <a href="#quote" className="call-bar-quote">Get a quote</a>
    </div>
  );
}

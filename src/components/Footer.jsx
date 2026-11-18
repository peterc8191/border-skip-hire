import Logo from "./Logo.jsx";
import { navLinks, phones } from "../data.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Skip hire across South Armagh and South Down, Northern Ireland.</p>
        </div>
        <nav aria-label="Footer">
          <h4>Explore</h4>
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div>
          <h4>Call us</h4>
          {phones.map((p) => (
            <a key={p.href} href={p.href} className="footer-phone">{p.label}</a>
          ))}
        </div>
      </div>
      <div className="container footer-base">
        <p>&copy; {new Date().getFullYear()} Border Skip Hire Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

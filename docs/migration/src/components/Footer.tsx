import { c, rule } from "../theme";
import { FOOTER_PHOTO } from "../data/photos";

export default function Footer() {
  return (
    <footer style={{ position: "relative", padding: "clamp(4rem,10vw,7rem) clamp(1.25rem,5vw,3rem)", textAlign: "center", overflow: "hidden" }}>
      <img src={FOOTER_PHOTO} alt="Julius and Revia" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 22%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(28,40,27,.55),rgba(28,40,27,.82))" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem", color: c.paleText }}>
        <span style={{ fontFamily: "'Mrs Saint Delafield',cursive", fontSize: "clamp(2.8rem,8vw,4.6rem)", lineHeight: 1.2, padding: ".1em 0", color: c.white }}>Julius &amp; Revia</span>
        <span style={{ fontSize: "1.08rem", letterSpacing: ".06em" }}>September 26, 2026 · General Santos City</span>
        <span style={{ ...rule(c.goldSoft), margin: ".8rem 0" }} />
        <span style={{ fontSize: ".84rem", letterSpacing: ".22em", textTransform: "uppercase", opacity: .85 }}>Made with love, for Juls &amp; Rev</span>
      </div>
    </footer>
  );
}

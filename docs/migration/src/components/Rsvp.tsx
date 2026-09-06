import { useState } from "react";
import { c, rule, sectionPad } from "../theme";
import { RSVP_URL } from "../config/rsvp";

export default function Rsvp() {
  const [hover, setHover] = useState(false);
  const url = (RSVP_URL || "").trim();

  return (
    <section id="rsvp" style={{ background: c.green, color: c.white, padding: sectionPad }}>
      <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem" }}>
        <span style={{ fontSize: ".86rem", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600, color: c.goldSoft }}>We Await Your Response</span>
        <h2 style={{ fontSize: "clamp(2rem,5vw,2.9rem)", fontStyle: "italic", color: c.white }}>RSVP</h2>
        <span style={rule(c.goldSoft)} />
        <p style={{ fontSize: "clamp(1.15rem,2.6vw,1.35rem)", color: "#EFEBDC", marginTop: ".4rem" }}>Kindly let us know if you'll be able to join us in celebrating our special day.</p>
        <p style={{ fontSize: "1.08rem", color: c.goldSoft }}>
          Please respond on or before <strong style={{ color: c.white, fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>September 10, 2026</strong>
        </p>
        <a
          href={url || "#rsvp"}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ marginTop: ".6rem", fontSize: ".9rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, padding: ".95rem 2.2rem", background: hover ? c.goldSoft : c.white, color: c.ink }}
        >
          RSVP via Google Form
        </a>
        {!url && <p style={{ fontSize: "1.1rem", color: c.mint, fontStyle: "italic" }}>Form link coming soon — check back, or ask Juls &amp; Rev directly.</p>}
      </div>
    </section>
  );
}

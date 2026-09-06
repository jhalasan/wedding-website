import { useState } from "react";
import { c } from "../theme";
import { HERO } from "../data/photos";

const meta: React.CSSProperties = {
  fontSize: ".94rem",
  letterSpacing: ".22em",
  textTransform: "uppercase",
  fontWeight: 600,
  whiteSpace: "nowrap",
};

const btn: React.CSSProperties = {
  fontSize: ".9rem",
  letterSpacing: ".16em",
  textTransform: "uppercase",
  fontWeight: 600,
  padding: ".85rem 2rem",
  transition: "background .25s ease, color .25s ease, border-color .25s ease",
};

export default function Hero() {
  const [h1, setH1] = useState(false);
  const [h2, setH2] = useState(false);
  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "min(94svh,940px)",
        display: "grid",
        placeItems: "center",
        padding: "clamp(3rem,9vh,6rem) clamp(1.25rem,5vw,3rem)",
        overflow: "hidden",
      }}
    >
      <img src={HERO} alt="Julius and Revia" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 32%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(28,40,27,.62) 0%,rgba(28,40,27,.34) 38%,rgba(28,40,27,.78) 100%)" }} />
      <div style={{ position: "relative", textAlign: "center", color: c.white, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem", maxWidth: "44rem", animation: "rise 1s ease both" }}>
        <span style={{ fontSize: ".86rem", letterSpacing: ".34em", textTransform: "uppercase", fontWeight: 600, color: c.goldSoft }}>Together with our families</span>
        <span style={{ width: 1, height: 44, background: `linear-gradient(${c.goldSoft},transparent)` }} />
        <h1 style={{ fontFamily: "'Mrs Saint Delafield',cursive", fontWeight: 400, lineHeight: 1.2, fontSize: "clamp(3.4rem,11vw,7rem)", color: c.white, padding: ".12em 0", textShadow: "0 2px 30px rgba(20,30,19,.45)" }}>
          Julius &amp; Revia
        </h1>
        <p style={{ fontStyle: "italic", fontSize: "clamp(1.15rem,2.4vw,1.5rem)", color: c.paleText, maxWidth: "30rem" }}>We joyfully invite you to witness our marriage.</p>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(.8rem,3vw,1.6rem)", flexWrap: "wrap", justifyContent: "center", marginTop: ".6rem", paddingTop: "1.4rem", borderTop: "1px solid rgba(231,220,190,.45)" }}>
          <span style={meta}>Saturday</span>
          <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "clamp(1.3rem,3.4vw,1.9rem)", letterSpacing: ".06em", whiteSpace: "nowrap" }}>09 · 26 · 2026</span>
          <span style={meta}>2:30 PM</span>
        </div>
        <span style={{ fontSize: "1.08rem", color: c.goldSoft, letterSpacing: ".04em" }}>Sto. Niño de Bula Parish Church · General Santos City</span>
        <div style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1.2rem" }}>
          <a href="#rsvp" onMouseEnter={() => setH1(true)} onMouseLeave={() => setH1(false)} style={{ ...btn, background: h1 ? c.goldSoft : c.white, color: c.ink, border: `1px solid ${c.white}` }}>RSVP</a>
          <a href="#details" onMouseEnter={() => setH2(true)} onMouseLeave={() => setH2(false)} style={{ ...btn, border: "1px solid rgba(255,253,247,.7)", color: c.white, background: h2 ? "rgba(255,253,247,.14)" : "transparent" }}>Event Details</a>
        </div>
      </div>
    </header>
  );
}

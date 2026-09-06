import { c } from "../theme";
import { ADVENTURE } from "../data/photos";

export default function AdventureBand() {
  return (
    <section style={{ position: "relative", height: "min(90svh,860px)", display: "grid", gridTemplateRows: "1fr auto", padding: "clamp(1.4rem,4vw,2.6rem)", overflow: "hidden", background: c.ink }}>
      <img src={ADVENTURE} alt="Julius and Revia" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(28,40,27,.16) 0%,rgba(28,40,27,.08) 34%,rgba(28,40,27,.62) 68%,rgba(28,40,27,.88) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, boxShadow: "0 0 140px rgba(20,30,19,.55) inset", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: "clamp(1.4rem,4vw,2.6rem)", border: `1px solid ${c.goldSoft}`, opacity: .75, pointerEvents: "none" }} />
      <div />
      <div
        style={{
          position: "relative",
          margin: "clamp(1.2rem,3vw,2rem)",
          padding: "clamp(1rem,2.4vw,1.5rem) clamp(1.2rem,3vw,2rem)",
          background: "rgba(30,42,29,.42)",
          backdropFilter: "blur(8px) saturate(1.05)",
          WebkitBackdropFilter: "blur(8px) saturate(1.05)",
          borderTop: "1px solid rgba(231,220,190,.55)",
          borderBottom: "1px solid rgba(231,220,190,.55)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: ".8rem clamp(1.2rem,4vw,2.4rem)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: ".35rem", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            <span style={{ width: 34, height: 1, background: c.goldSoft }} />
            <span style={{ fontSize: ".82rem", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600, color: c.goldSoft }}>Chapter One</span>
          </div>
          <p style={{ color: c.white, fontFamily: "'Mrs Saint Delafield',cursive", fontSize: "clamp(2.1rem,5.2vw,3.4rem)", lineHeight: 1.1, padding: ".05em 0", textShadow: "0 2px 20px rgba(20,30,19,.5)" }}>
            and so the adventure begins
          </p>
        </div>
        <p style={{ color: c.paleText, fontStyle: "italic", fontSize: "clamp(1.05rem,2.2vw,1.22rem)", maxWidth: "20em", textAlign: "right", flex: "1 1 14rem" }}>
          Two families, one story — and a lifetime to write the rest of it together.
        </p>
      </div>
    </section>
  );
}

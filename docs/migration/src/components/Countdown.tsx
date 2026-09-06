import { c } from "../theme";
import { useCountdown } from "../hooks/useCountdown";

export default function Countdown() {
  const units = useCountdown();
  return (
    <section style={{ background: c.sand, borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, padding: "clamp(2.4rem,5vw,3.4rem) clamp(1.25rem,5vw,3rem)" }}>
      <div style={{ maxWidth: "60rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.6rem" }}>
        <span style={{ fontSize: ".86rem", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600, color: c.sage }}>Counting the days</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))", gap: 1, background: c.line, width: "100%", maxWidth: "44rem" }}>
          {units.map((u) => (
            <div key={u.label} style={{ background: c.sand, padding: "1.1rem .5rem", textAlign: "center", display: "flex", flexDirection: "column", gap: ".3rem" }}>
              <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "clamp(2rem,6vw,3rem)", lineHeight: 1, color: c.green }}>{u.value}</span>
              <span style={{ fontSize: ".95rem", letterSpacing: ".22em", textTransform: "uppercase", color: c.sage }}>{u.label}</span>
            </div>
          ))}
        </div>
        <p style={{ fontStyle: "italic", color: c.sage, fontSize: "1.12rem" }}>until we say “I do”</p>
      </div>
    </section>
  );
}

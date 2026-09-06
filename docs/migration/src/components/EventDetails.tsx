import { c, eyebrow, sectionTitle, rule, centeredHead, sectionPad } from "../theme";

const cardEyebrow: React.CSSProperties = { fontSize: ".84rem", letterSpacing: ".26em", textTransform: "uppercase", fontWeight: 600, color: c.green };
const cardTitle: React.CSSProperties = { fontSize: "clamp(1.55rem,3.6vw,2.05rem)", fontStyle: "italic", lineHeight: 1.25, marginTop: ".2rem" };
const cardStyle: React.CSSProperties = { background: c.card, padding: "clamp(1.8rem,4vw,2.8rem)", display: "flex", flexDirection: "column", gap: ".55rem" };
const mapLink: React.CSSProperties = {
  marginTop: "1rem",
  alignSelf: "flex-start",
  fontSize: ".86rem",
  letterSpacing: ".18em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: c.green,
  borderBottom: `1px solid ${c.gold}`,
  paddingBottom: ".25rem",
};

const icons = [
  { label: "Ceremony", path: <><circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" /></> },
  { label: "Photos", path: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13.5" r="3.2" /></> },
  { label: "Dinner", path: <><circle cx="12" cy="10" r="7" /><path d="M12 17v4M9 21h6" /></> },
];

export default function EventDetails() {
  return (
    <section id="details" style={{ padding: sectionPad }}>
      <div style={{ maxWidth: "66rem", margin: "0 auto" }}>
        <div style={{ ...centeredHead, marginBottom: "clamp(2.2rem,5vw,3.4rem)" }}>
          <span style={eyebrow}>Ceremony &amp; Reception</span>
          <h2 style={sectionTitle}>Event Details</h2>
          <span style={rule()} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 1, background: c.line, border: `1px solid ${c.line}` }}>
          <div style={cardStyle}>
            <span style={cardEyebrow}>Ceremony</span>
            <h3 style={cardTitle}>Sto. Niño de Bula Parish Church</h3>
            <span style={{ color: c.sage, fontSize: "1.1rem" }}>Zone 9, Brgy. Bula, General Santos City</span>
            <span style={{ fontVariantNumeric: "tabular-nums", letterSpacing: ".04em", marginTop: ".5rem" }}>September 26, 2026 · 2:30 PM</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Sto.%20Ni%C3%B1o%20de%20Bula%20Parish%20Church%2C%20Bula%2C%20General%20Santos%20City" target="_blank" rel="noopener" style={mapLink}>Get Directions</a>
          </div>
          <div style={cardStyle}>
            <span style={cardEyebrow}>Reception</span>
            <h3 style={cardTitle}>Phela Grande Convention Center</h3>
            <span style={{ color: c.sage, fontSize: "1.1rem" }}>National Highway, General Santos City</span>
            <span style={{ fontVariantNumeric: "tabular-nums", letterSpacing: ".04em", marginTop: ".5rem" }}>Reception to follow</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Phela%20Grande%20Convention%20Center%2C%20National%20Highway%2C%20General%20Santos%20City" target="_blank" rel="noopener" style={mapLink}>Get Directions</a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "1.6rem", marginTop: "clamp(2rem,4vw,3rem)", textAlign: "center" }}>
          {icons.map((i) => (
            <div key={i.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} style={{ width: 32, height: 32, color: c.sageLight }}>{i.path}</svg>
              <div style={{ fontSize: ".84rem", letterSpacing: ".2em", textTransform: "uppercase", color: c.sage }}>{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

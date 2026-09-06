import { c, eyebrow, sectionTitle, rule, centeredHead, sectionPad } from "../theme";

const cardStyle: React.CSSProperties = { background: c.card, padding: "clamp(1.8rem,4vw,2.8rem)", display: "flex", flexDirection: "column", gap: ".8rem" };
const cardEyebrow: React.CSSProperties = { fontSize: ".84rem", letterSpacing: ".26em", textTransform: "uppercase", fontWeight: 600, color: c.green };
const cardTitle: React.CSSProperties = { fontSize: "clamp(1.55rem,3.6vw,2.05rem)", fontStyle: "italic" };

const swatches = [
  { title: "Mint green", hex: c.mint },
  { title: "Sage green", hex: c.sageLight },
  { title: "Olive gold", hex: c.olive },
  { title: "Forest green", hex: c.green },
];

export default function AttireGifts() {
  return (
    <section id="attire" style={{ padding: sectionPad }}>
      <div style={{ maxWidth: "66rem", margin: "0 auto" }}>
        <div style={{ ...centeredHead, marginBottom: "clamp(2.2rem,5vw,3.2rem)" }}>
          <span style={eyebrow}>What To Wear &amp; Gift Guide</span>
          <h2 style={sectionTitle}>Attire &amp; Gifts</h2>
          <span style={rule()} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 1, background: c.line, border: `1px solid ${c.line}` }}>
          <div style={cardStyle}>
            <span style={cardEyebrow}>Dress Code</span>
            <h3 style={cardTitle}>Formal / Semi-Formal</h3>
            <p style={{ color: c.sage }}>Gentlemen: Tuxedo, long sleeve.<br />Ladies: Gown or long dress.</p>
            <div style={{ display: "flex", gap: ".6rem", marginTop: ".4rem" }}>
              {swatches.map((s) => (
                <span key={s.title} title={s.title} style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(0,0,0,.12)", background: s.hex }} />
              ))}
            </div>
            <p style={{ color: c.sage, fontSize: "1.1rem" }}>We'd love to see you in shades of mint and sage green.</p>
          </div>
          <div style={cardStyle}>
            <span style={cardEyebrow}>Gift Guide</span>
            <h3 style={cardTitle}>Your presence is the gift</h3>
            <p style={{ color: c.sage }}>With God's grace, we are truly blessed. Your presence and prayers are all that we request — but if you desire to give nonetheless, a monetary gift is the one we'd suggest.</p>
            <p style={{ fontSize: "1.1rem", color: c.sage, fontStyle: "italic", marginTop: "auto" }}>Gift/GCash details to be added once shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

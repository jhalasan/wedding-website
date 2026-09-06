import { c, eyebrow } from "../theme";

export default function CoupleNote() {
  return (
    <section style={{ padding: "clamp(3.5rem,8vw,6.5rem) clamp(1.25rem,5vw,3rem)" }}>
      <div style={{ maxWidth: "62rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "clamp(1.6rem,5vw,3.5rem)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span style={eyebrow}>A note from us</span>
          <h2 style={{ fontFamily: "'Mrs Saint Delafield',cursive", fontWeight: 400, fontSize: "clamp(2.6rem,6.5vw,3.9rem)", lineHeight: 1.2, padding: ".1em 0", color: c.green }}>Julius &amp; Revia</h2>
        </div>
        <p style={{ fontStyle: "italic", fontSize: "clamp(1.2rem,2.6vw,1.5rem)", lineHeight: 1.62, color: c.sage, borderLeft: `1px solid ${c.line}`, paddingLeft: "clamp(1.2rem,3vw,2rem)" }}>
          “With grateful hearts, we invite you to be part of our story as we begin this new chapter together — as husband and wife.”
        </p>
      </div>
    </section>
  );
}

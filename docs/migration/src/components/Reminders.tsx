import { c, eyebrow, sectionTitle, rule, centeredHead } from "../theme";

const items = [
  { label: "Be On Time", path: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></> },
  { label: "Stay for the Whole Celebration", path: <path d="M6 3h12M6 21h12M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9" /> },
  { label: "Enjoy & Have Fun", path: <path d="M12 20s-7-4.6-9.3-8.9C1.3 8 2.7 5 6 5c2 0 3.3 1.1 6 3.8C14.7 6.1 16 5 18 5c3.3 0 4.7 3 3.3 6.1C19 15.4 12 20 12 20z" /> },
];

export default function Reminders() {
  return (
    <section style={{ padding: "clamp(3.5rem,8vw,6rem) clamp(1.25rem,5vw,3rem)" }}>
      <div style={{ maxWidth: "62rem", margin: "0 auto" }}>
        <div style={{ ...centeredHead, marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <span style={eyebrow}>A Few Notes</span>
          <h2 style={sectionTitle}>Reminders</h2>
          <span style={rule()} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "clamp(1.6rem,4vw,2.4rem)", textAlign: "center" }}>
          {items.map((i) => (
            <div key={i.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".7rem" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} style={{ width: 36, height: 36, color: c.sageLight }}>{i.path}</svg>
              <h4 style={{ fontSize: "1.32rem", fontStyle: "italic", fontWeight: 500 }}>{i.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

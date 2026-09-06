import { c, rule, reveal } from "../theme";
import { useReveal } from "../hooks/useReveal";

export default function Verse() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} style={{ padding: "clamp(3.5rem,8vw,6rem) clamp(1.25rem,5vw,3rem)", textAlign: "center", ...reveal(visible) }}>
      <div style={{ maxWidth: "34rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem" }}>
        <span style={rule(c.gold, 120)} />
        <p style={{ fontStyle: "italic", fontSize: "clamp(1.3rem,3.2vw,1.85rem)", lineHeight: 1.5, color: c.green }}>
          “When the time is right, I, the Lord, will make it happen.”
        </p>
        <span style={{ fontSize: "1rem", letterSpacing: ".26em", textTransform: "uppercase", fontWeight: 600, color: c.green }}>Isaiah 60:22</span>
        <span style={rule(c.gold, 120)} />
      </div>
    </section>
  );
}

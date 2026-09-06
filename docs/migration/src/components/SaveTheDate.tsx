import { c } from "../theme";
import { SAVE_THE_DATE } from "../data/photos";

export default function SaveTheDate() {
  return (
    <section style={{ position: "relative", height: "min(60svh,540px)", display: "grid", placeItems: "center", overflow: "hidden" }}>
      <img src={SAVE_THE_DATE} alt="Julius and Revia" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 35%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(28,40,27,.3),rgba(28,40,27,.6))" }} />
      <div style={{ position: "relative", textAlign: "center", color: c.white, padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: ".8rem" }}>
        <span style={{ fontSize: ".86rem", letterSpacing: ".32em", textTransform: "uppercase", fontWeight: 600, color: c.goldSoft }}>Save the date</span>
        <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "clamp(2.4rem,9vw,5rem)", lineHeight: 1, letterSpacing: ".08em" }}>09 · 26 · 26</span>
      </div>
    </section>
  );
}

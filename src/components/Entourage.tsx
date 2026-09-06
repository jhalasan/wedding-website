import { c, eyebrow, sectionTitle, centeredHead, sectionPad, reveal } from "../theme";
import { PARENTS, BEST_MAN, MAID_OF_HONOR, GROOMSMEN, BRIDESMAIDS, FLOWER_GIRLS, BEARERS, SECONDARY, PRINCIPAL_SPONSORS } from "../data/entourage";
import { useReveal } from "../hooks/useReveal";

const rowGrid = (min = 220): React.CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
  gap: "1.6rem",
  paddingTop: "1.4rem",
  borderTop: `1px solid ${c.line}`,
});

const rowLabel: React.CSSProperties = { fontSize: ".98rem", letterSpacing: ".26em", textTransform: "uppercase", fontWeight: 600, color: c.green, paddingTop: ".35rem" };
const subLabel: React.CSSProperties = { fontSize: ".94rem", letterSpacing: ".2em", textTransform: "uppercase", color: c.green, marginBottom: ".3rem" };
const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: ".15rem" };
const name: React.CSSProperties = { fontSize: "1.34rem" };
const note: React.CSSProperties = { fontStyle: "italic", color: c.sage, fontSize: "1.18rem" };

const Names = ({ label, names }: { label?: string; names: string[] }) => (
  <div style={col}>
    {label && <h4 style={subLabel}>{label}</h4>}
    {names.map((n) => <p key={n} style={name}>{n}</p>)}
  </div>
);

export default function Entourage() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="entourage" style={{ padding: sectionPad, ...reveal(visible) }}>
      <div style={{ maxWidth: "66rem", margin: "0 auto" }}>
        <div style={{ ...centeredHead, marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <span style={eyebrow}>Those Who Stand With Us</span>
          <h2 style={sectionTitle}>Wedding Entourage</h2>
          <span style={{ fontFamily: "'Mrs Saint Delafield',cursive", fontSize: "clamp(1.9rem,5vw,2.6rem)", lineHeight: 1.3, color: c.green, marginTop: ".3rem" }}>Halasan &amp; Ureta</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem,4vw,3rem)" }}>
          <div style={rowGrid()}>
            <h3 style={rowLabel}>Parents</h3>
            <Names label="Parents of the Groom" names={PARENTS.groom} />
            <Names label="Parents of the Bride" names={PARENTS.bride} />
          </div>

          <div style={rowGrid()}>
            <h3 style={rowLabel}>Best Man &amp; Maid of Honor</h3>
            <Names label="Best Man" names={BEST_MAN} />
            <Names label="Maid of Honor" names={MAID_OF_HONOR} />
          </div>

          <div style={rowGrid()}>
            <h3 style={rowLabel}>Groomsmen &amp; Bridesmaids</h3>
            <Names names={GROOMSMEN} />
            <Names names={BRIDESMAIDS} />
          </div>

          <div style={rowGrid()}>
            <div>
              <h3 style={rowLabel}>Flower Girls &amp; Bearers</h3>
              <p style={{ ...note, marginTop: ".6rem" }}>Carrying flowers of prosperity, and the symbols of faith, love &amp; treasure</p>
            </div>
            <Names label="Flower Girls" names={FLOWER_GIRLS} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {BEARERS.map((b) => <Names key={b.label} label={b.label} names={b.names} />)}
            </div>
          </div>

          <div style={rowGrid(200)}>
            <h3 style={rowLabel}>Secondary Sponsors</h3>
            {SECONDARY.map((s) => <Names key={s.label} label={s.label} names={s.names} />)}
          </div>

          <div style={{ paddingTop: "1.4rem", borderTop: `1px solid ${c.line}` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem", marginBottom: "1.4rem" }}>
              <h3 style={{ ...rowLabel, paddingTop: 0 }}>Principal Sponsors</h3>
              <p style={note}>To stand as witnesses as we exchange our vows</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: ".45rem clamp(1.5rem,4vw,3rem)" }}>
              {PRINCIPAL_SPONSORS.map((s) => <p key={s} style={{ fontSize: "1.28rem" }}>{s}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

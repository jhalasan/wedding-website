import { PARENTS, BEST_MAN, MAID_OF_HONOR, GROOMSMEN, BRIDESMAIDS, FLOWER_GIRLS, BEARERS, SECONDARY, PRINCIPAL_SPONSORS } from "../data/entourage";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Entourage.module.css";

const Names = ({ label, names }: { label?: string; names: string[] }) => (
  <div className={styles.col}>
    {label && <h4 className={styles.subLabel}>{label}</h4>}
    {names.map((n) => <p key={n} className={styles.name}>{n}</p>)}
  </div>
);

export default function Entourage() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="entourage" className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <div className={`${shared.centeredHead} ${styles.header}`}>
          <span className={shared.eyebrow}>Those Who Stand With Us</span>
          <h2 className={shared.sectionTitle}>Wedding Entourage</h2>
          <span className={styles.headerScript}>Halasan &amp; Ureta</span>
        </div>

        <div className={styles.body}>
          <div className={styles.row}>
            <h3 className={styles.rowLabel}>Parents</h3>
            <Names label="Parents of the Groom" names={PARENTS.groom} />
            <Names label="Parents of the Bride" names={PARENTS.bride} />
          </div>

          <div className={styles.row}>
            <h3 className={styles.rowLabel}>Best Man &amp; Maid of Honor</h3>
            <Names label="Best Man" names={BEST_MAN} />
            <Names label="Maid of Honor" names={MAID_OF_HONOR} />
          </div>

          <div className={styles.row}>
            <h3 className={styles.rowLabel}>Groomsmen &amp; Bridesmaids</h3>
            <Names names={GROOMSMEN} />
            <Names names={BRIDESMAIDS} />
          </div>

          <div className={styles.row}>
            <div>
              <h3 className={styles.rowLabel}>Flower Girls &amp; Bearers</h3>
              <p className={`${styles.note} ${styles.noteSpaced}`}>Carrying flowers of prosperity, and the symbols of faith, love &amp; treasure</p>
            </div>
            <Names label="Flower Girls" names={FLOWER_GIRLS} />
            <div className={styles.colGap}>
              {BEARERS.map((b) => <Names key={b.label} label={b.label} names={b.names} />)}
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowNarrow}`}>
            <h3 className={styles.rowLabel}>Secondary Sponsors</h3>
            {SECONDARY.map((s) => <Names key={s.label} label={s.label} names={s.names} />)}
          </div>

          <div className={styles.principal}>
            <div className={styles.principalHeader}>
              <h3 className={`${styles.rowLabel} ${styles.rowLabelFlush}`}>Principal Sponsors</h3>
              <p className={styles.note}>To stand as witnesses as we exchange our vows</p>
            </div>
            <div className={styles.principalGrid}>
              {PRINCIPAL_SPONSORS.map((s) => <p key={s} className={styles.principalName}>{s}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

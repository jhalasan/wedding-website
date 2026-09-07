import { useCountdown } from "../hooks/useCountdown";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const units = useCountdown();
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <span className={styles.kicker}>Counting the days</span>
        <div className={styles.grid}>
          {units.map((u) => (
            <div key={u.label} className={styles.cell}>
              <span className={styles.value}>{u.value}</span>
              <span className={styles.label}>{u.label}</span>
            </div>
          ))}
        </div>
        <p className={styles.footnote}>until we say “I do”</p>
      </div>
    </section>
  );
}

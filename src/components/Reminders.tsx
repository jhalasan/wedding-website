import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Reminders.module.css";

const items = [
  { label: "Be On Time", path: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></> },
  { label: "Stay for the Whole Celebration", path: <path d="M6 3h12M6 21h12M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9" /> },
  { label: "Enjoy & Have Fun", path: <path d="M12 20s-7-4.6-9.3-8.9C1.3 8 2.7 5 6 5c2 0 3.3 1.1 6 3.8C14.7 6.1 16 5 18 5c3.3 0 4.7 3 3.3 6.1C19 15.4 12 20 12 20z" /> },
];

export default function Reminders() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <div className={`${shared.centeredHead} ${styles.header}`}>
          <span className={shared.eyebrow}>A Few Notes</span>
          <h2 className={shared.sectionTitle}>Reminders</h2>
          <span className={shared.rule} />
        </div>
        <div className={styles.grid}>
          {items.map((i) => (
            <div key={i.label} className={styles.item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className={styles.icon}>{i.path}</svg>
              <h4 className={styles.label}>{i.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

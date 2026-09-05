import styles from "./Reminders.module.css";

export function Reminders() {
  return (
    <section aria-label="Reminders">
      <div className="section-head">
        <span className="eyebrow">A Few Notes</span>
        <h2>Reminders</h2>
        <span className="rule"></span>
      </div>
      <div className={styles.reminders}>
        <div className={styles.item}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" />
          </svg>
          <h4>Be On Time</h4>
        </div>
        <div className={styles.item}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M6 3h12M6 21h12M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9" />
          </svg>
          <h4>Stay for the Whole Celebration</h4>
        </div>
        <div className={styles.item}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M12 20s-7-4.6-9.3-8.9C1.3 8 2.7 5 6 5c2 0 3.3 1.1 6 3.8C14.7 6.1 16 5 18 5c3.3 0 4.7 3 3.3 6.1C19 15.4 12 20 12 20z" />
          </svg>
          <h4>Enjoy &amp; Have Fun</h4>
        </div>
      </div>
    </section>
  );
}

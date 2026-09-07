import { HERO } from "../data/photos";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="top" className={styles.header}>
      <img src={HERO} alt="Julius and Revia" className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className={styles.content}>
        <span className={styles.together}>Together with our families</span>
        <span className={styles.divider} />
        <h1 className={styles.title}>Julius &amp; Revia</h1>
        <p className={styles.subtitle}>We joyfully invite you to witness our marriage.</p>
        <div className={styles.dateRow}>
          <span className={styles.meta}>Saturday</span>
          <span className={styles.date}>09 · 26 · 2026</span>
          <span className={styles.meta}>2:30 PM</span>
        </div>
        <span className={styles.venue}>Sto. Niño de Bula Parish Church · General Santos City</span>
        <div className={styles.actions}>
          <a href="#rsvp" className={`${styles.btn} ${styles.btnPrimary}`}>RSVP</a>
          <a href="#details" className={`${styles.btn} ${styles.btnSecondary}`}>Event Details</a>
        </div>
      </div>
    </header>
  );
}

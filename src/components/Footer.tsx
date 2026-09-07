import { FOOTER_PHOTO } from "../data/photos";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <footer ref={ref} className={`${styles.footer} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <img src={FOOTER_PHOTO} alt="Julius and Revia" className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className={styles.content}>
        <span className={styles.title}>Julius &amp; Revia</span>
        <span className={styles.date}>September 26, 2026 · General Santos City</span>
        <span className={`${shared.ruleLight} ${styles.rule}`} />
        <span className={styles.credit}>Made with love, for Juls &amp; Rev</span>
      </div>
    </footer>
  );
}

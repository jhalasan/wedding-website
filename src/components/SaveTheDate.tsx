import { SAVE_THE_DATE } from "../data/photos";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./SaveTheDate.module.css";

export default function SaveTheDate() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <img src={SAVE_THE_DATE} alt="Julius and Revia" className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className={styles.content}>
        <span className={styles.kicker}>Save the date</span>
        <span className={styles.date}>09 · 26 · 26</span>
      </div>
    </section>
  );
}

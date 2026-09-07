import { ADVENTURE } from "../data/photos";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./AdventureBand.module.css";

export default function AdventureBand() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <img src={ADVENTURE} alt="Julius and Revia" className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className={styles.innerShadow} />
      <div className={styles.frame} />
      <div />
      <div className={styles.caption}>
        <div className={styles.chapter}>
          <div className={styles.chapterLabelRow}>
            <span className={styles.chapterRule} />
            <span className={styles.chapterLabel}>Chapter One</span>
          </div>
          <p className={styles.chapterTitle}>
            and so the adventure begins
          </p>
        </div>
        <p className={styles.tagline}>
          Two families, one story — and a lifetime to write the rest of it together.
        </p>
      </div>
    </section>
  );
}

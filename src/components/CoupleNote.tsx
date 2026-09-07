import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./CoupleNote.module.css";

export default function CoupleNote() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.grid}>
        <div className={styles.heading}>
          <span className={shared.eyebrow}>A note from us</span>
          <h2 className={styles.title}>Julius &amp; Revia</h2>
        </div>
        <p className={styles.quote}>
          “With grateful hearts, we invite you to be part of our story as we begin this new chapter together — as husband and wife.”
        </p>
      </div>
    </section>
  );
}

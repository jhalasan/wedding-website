import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Verse.module.css";

export default function Verse() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <span className={shared.ruleWide} />
        <p className={styles.quote}>
          “When the time is right, I, the Lord, will make it happen.”
        </p>
        <span className={styles.reference}>Isaiah 60:22</span>
        <span className={shared.ruleWide} />
      </div>
    </section>
  );
}

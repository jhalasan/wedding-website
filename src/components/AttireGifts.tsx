import { c } from "../theme";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./AttireGifts.module.css";

const swatches = [
  { title: "Mint green", hex: c.mint },
  { title: "Sage green", hex: c.sageLight },
  { title: "Olive gold", hex: c.olive },
  { title: "Forest green", hex: c.green },
];

export default function AttireGifts() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="attire" className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <div className={`${shared.centeredHead} ${styles.header}`}>
          <span className={shared.eyebrow}>What To Wear &amp; Gift Guide</span>
          <h2 className={shared.sectionTitle}>Attire &amp; Gifts</h2>
          <span className={shared.rule} />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardEyebrow}>Dress Code</span>
            <h3 className={styles.cardTitle}>Formal / Semi-Formal</h3>
            <p className={styles.body}>Gentlemen: Tuxedo, long sleeve.<br />Ladies: Gown or long dress.</p>
            <div className={styles.swatches}>
              {swatches.map((s) => (
                <span key={s.title} title={s.title} className={styles.swatch} style={{ background: s.hex }} />
              ))}
            </div>
            <p className={styles.bodySmall}>We'd love to see you in shades of mint and sage green.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardEyebrow}>Gift Guide</span>
            <h3 className={styles.cardTitle}>Your presence is the gift</h3>
            <p className={styles.body}>With God's grace, we are truly blessed. Your presence and prayers are all that we request — but if you desire to give nonetheless, a monetary gift is the one we'd suggest.</p>
            <p className={styles.footnote}>Gift/GCash details to be added once shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./AttireGifts.module.css";

export function AttireGifts() {
  return (
    <section id="attire">
      <div className="section-head">
        <span className="eyebrow">What To Wear &amp; Gift Guide</span>
        <h2>Attire &amp; Gifts</h2>
        <span className="rule"></span>
      </div>

      <div className={styles.twoCol}>
        <div className={styles.panel}>
          <h3>Dress Code</h3>
          <p className={styles.lede}>Formal / Semi-Formal</p>
          <p>
            Gentlemen: Tuxedo, long sleeve.
            <br />
            Ladies: Gown or long dress.
          </p>
          <div className={styles.swatches}>
            <span className={styles.swatch} style={{ background: "#CFE6D4" }} title="Mint green"></span>
            <span className={styles.swatch} style={{ background: "#3F5A3C" }} title="Forest green"></span>
            <span className={styles.swatch} style={{ background: "#8A7F4A" }} title="Olive gold"></span>
            <span className={styles.swatch} style={{ background: "#7C8F5D" }} title="Sage green"></span>
          </div>
          <p>We'd love to see you in shades of mint and sage green.</p>
        </div>
        <div className={styles.panel}>
          <h3>Gift Guide</h3>
          <p>
            With God's grace, we are truly blessed. Your presence and prayers are all that we request &mdash; but if
            you desire to give nonetheless, a monetary gift is the one we'd suggest.
          </p>
          <p className={styles.rsvpNote}>Gift/GCash details to be added once shared.</p>
        </div>
      </div>
    </section>
  );
}

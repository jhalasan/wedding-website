import { RSVP_FORM_URL } from "../config/rsvp";
import styles from "./RSVP.module.css";

export function RSVP() {
  return (
    <section id="rsvp">
      <div className="section-head">
        <span className="eyebrow">We Await Your Response</span>
        <h2>RSVP</h2>
        <span className="rule"></span>
      </div>

      <div className={styles.rsvpCard}>
        <p>Kindly let us know if you'll be able to join us in celebrating our special day.</p>
        <p className={styles.deadline}>
          Please respond on or before <strong>September 10, 2026</strong>
        </p>
        <a
          className="btn solid"
          href={RSVP_FORM_URL || "#"}
          target="_blank"
          rel="noopener"
        >
          RSVP via Google Form
        </a>
        {!RSVP_FORM_URL && (
          <p className={styles.rsvpNote}>Form link coming soon &mdash; check back, or ask Juls &amp; Rev directly.</p>
        )}
      </div>
    </section>
  );
}

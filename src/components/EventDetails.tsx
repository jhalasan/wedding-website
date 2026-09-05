import styles from "./EventDetails.module.css";

export function EventDetails() {
  return (
    <section id="details">
      <div className="section-head">
        <span className="eyebrow">Ceremony &amp; Reception</span>
        <h2>Event Details</h2>
        <span className="rule"></span>
      </div>

      <div className={styles.events}>
        <div className={styles.eventCard}>
          <span className={styles.kind}>Ceremony</span>
          <h3>Sto. Ni&ntilde;o de Bula Parish Church</h3>
          <span className={styles.addr}>Zone 9, Brgy. Bula, General Santos City</span>
          <span className={styles.when}>September 26, 2026 &middot; 2:30 PM</span>
          <a
            className={styles.dir}
            href="https://www.google.com/maps/search/?api=1&query=Sto.%20Ni%C3%B1o%20de%20Bula%20Parish%20Church%2C%20Bula%2C%20General%20Santos%20City"
            target="_blank"
            rel="noopener"
          >
            Get Directions
          </a>
        </div>
        <div className={styles.eventCard}>
          <span className={styles.kind}>Reception</span>
          <h3>Phela Grande Convention Center</h3>
          <span className={styles.addr}>National Highway, General Santos City</span>
          <span className={styles.when}>Reception to follow</span>
          <a
            className={styles.dir}
            href="https://www.google.com/maps/search/?api=1&query=Phela%20Grande%20Convention%20Center%2C%20National%20Highway%2C%20General%20Santos%20City"
            target="_blank"
            rel="noopener"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className={styles.flow}>
        <div className={styles.step}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="8" cy="12" r="5" />
            <circle cx="16" cy="12" r="5" />
          </svg>
          <div className={styles.label}>Ceremony</div>
        </div>
        <div className={styles.step}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
            <circle cx="12" cy="13.5" r="3.2" />
          </svg>
          <div className={styles.label}>Photos</div>
        </div>
        <div className={styles.step}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="12" cy="10" r="7" />
            <path d="M12 17v4M9 21h6" />
          </svg>
          <div className={styles.label}>Dinner</div>
        </div>
      </div>
    </section>
  );
}

import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./EventDetails.module.css";

const icons = [
  { label: "Ceremony", path: <><circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" /></> },
  { label: "Photos", path: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13.5" r="3.2" /></> },
  { label: "Dinner", path: <><circle cx="12" cy="10" r="7" /><path d="M12 17v4M9 21h6" /></> },
];

export default function EventDetails() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="details" className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <div className={`${shared.centeredHead} ${styles.header}`}>
          <span className={shared.eyebrow}>Ceremony &amp; Reception</span>
          <h2 className={shared.sectionTitle}>Event Details</h2>
          <span className={shared.rule} />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardEyebrow}>Ceremony</span>
            <h3 className={styles.cardTitle}>Sto. Niño de Bula Parish Church</h3>
            <span className={styles.address}>Zone 9, Brgy. Bula, General Santos City</span>
            <span className={styles.time}>September 26th, 2026 · 2:30 PM</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Sto.%20Ni%C3%B1o%20de%20Bula%20Parish%20Church%2C%20Bula%2C%20General%20Santos%20City" target="_blank" rel="noopener" className={styles.mapLink}>Get Directions</a>
          </div>
          <div className={styles.card}>
            <span className={styles.cardEyebrow}>Reception</span>
            <h3 className={styles.cardTitle}>Phela Grande Convention Center</h3>
            <span className={styles.address}>National Highway, General Santos City</span>
            <span className={styles.time}>Reception to follow</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Phela%20Grande%20Convention%20Center%2C%20National%20Highway%2C%20General%20Santos%20City" target="_blank" rel="noopener" className={styles.mapLink}>Get Directions</a>
          </div>
        </div>

        <div className={styles.icons}>
          {icons.map((i) => (
            <div key={i.label} className={styles.iconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className={styles.icon}>{i.path}</svg>
              <div className={styles.iconLabel}>{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

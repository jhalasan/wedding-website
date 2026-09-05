import coupleImg from "../assets/_CEP4320.jpg";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <p className={styles.verse}>
        "When the time is right, I, the Lord, will make it happen."
        <cite>Isaiah 60:22</cite>
      </p>

      <div className={styles.frame}>
        <img src={coupleImg} alt="Julius and Revia" className={styles.frameImg} />
      </div>

      <h1 className={`${styles.names} script`}>Julius &amp; Revia</h1>
      <p className={styles.tagline}>Together with our families, we joyfully invite you to witness our marriage.</p>

      <div className={styles.savedate}>
        <span className={styles.date}>Saturday, September 26, 2026 &middot; 2:30 PM</span>
        <span className={styles.place}>Sto. Ni&ntilde;o de Bula Parish Church, General Santos City</span>
      </div>

      <div className={styles.heroCtas}>
        <a className="btn solid" href="#rsvp">RSVP</a>
        <a className="btn ghost" href="#details">Event Details</a>
      </div>
    </section>
  );
}

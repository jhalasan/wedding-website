import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={`${styles.script} script`}>Julius &amp; Revia</span>
      <span>September 26, 2026 &middot; General Santos City</span>
      <div className={styles.credit}>Made with love, for Juls &amp; Rev</div>
    </footer>
  );
}

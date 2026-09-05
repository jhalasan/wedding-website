import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.mono}>J &amp; R</span>
      <a className={styles.rsvpPill} href="#rsvp">RSVP</a>
    </nav>
  );
}

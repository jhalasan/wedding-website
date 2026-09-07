import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <nav ref={navRef} className={styles.nav}>
      <a href="#top" onClick={closeMenu} className={styles.brand}>
        <span className={styles.initials}>
          <span className={styles.initial}>J</span>
          <span className={styles.amp}>&amp;</span>
          <span className={styles.initial}>R</span>
        </span>
        <span className={styles.brandDivider} />
        <span className={styles.brandText}>
          <span className={styles.brandKicker}>The Wedding of</span>
          <span className={styles.brandName}>Julius &amp; Revia</span>
        </span>
      </a>
      <div className={`${styles.links}${open ? ` ${styles.linksOpen}` : ""}`}>
        <a href="#details" onClick={closeMenu} className={styles.link}>Details</a>
        <a href="#gallery" onClick={closeMenu} className={styles.link}>Gallery</a>
        <a href="#entourage" onClick={closeMenu} className={styles.link}>Entourage</a>
        <a href="#attire" onClick={closeMenu} className={styles.link}>Attire</a>
        <a href="#rsvp" onClick={closeMenu} className={styles.rsvpLink}>RSVP</a>
      </div>

      <button
        type="button"
        className={styles.burger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`${styles.burgerBar}${open ? ` ${styles.burgerBarOpenTop}` : ""}`} />
        <span className={`${styles.burgerBar}${open ? ` ${styles.burgerBarOpenMid}` : ""}`} />
        <span className={`${styles.burgerBar}${open ? ` ${styles.burgerBarOpenBottom}` : ""}`} />
      </button>
    </nav>
  );
}

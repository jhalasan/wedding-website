import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "../data/photos";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Gallery.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, visible } = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);

  const scrollToIndex = useCallback((i: number) => {
    const t = track.current;
    const el = t?.children[i] as HTMLElement | undefined;
    if (!t || !el) return;
    t.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - t.clientWidth / 2, behavior: "smooth" });
    setActive(i);
  }, []);

  const onScroll = () => {
    const t = track.current;
    if (!t) return;
    const center = t.scrollLeft + t.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    Array.from(t.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const d = Math.abs(center - (el.offsetLeft + el.offsetWidth / 2));
      if (d < best) { best = d; closest = i; }
    });
    setActive((prev) => (prev === closest ? prev : closest));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <div className={`${shared.centeredHead} ${styles.header}`}>
          <span className={shared.eyebrow}>A Few Favorites</span>
          <h2 className={shared.sectionTitle}>Our Story</h2>
          <span className={shared.rule} />
        </div>
        <div className={styles.carousel}>
          <div className={styles.trackWrap}>
            <div ref={track} className={styles.track} onScroll={onScroll}>
              {GALLERY.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  title="View photo"
                  onClick={() => openLightbox(i)}
                  className={styles.slideButton}
                >
                  <img
                    src={src}
                    alt="Julius and Revia"
                    loading="lazy"
                    className={`${styles.slideImage}${i === active ? ` ${styles.slideImageActive}` : ""}`}
                  />
                </button>
              ))}
            </div>
            <div className={`${styles.fade} ${styles.fadeLeft}`} />
            <div className={`${styles.fade} ${styles.fadeRight}`} />
          </div>
          <div className={styles.controls}>
            <button type="button" aria-label="Previous photo" onClick={() => scrollToIndex(Math.max(active - 1, 0))} className={styles.arrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={styles.arrowIcon}><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <div className={styles.counter}>
              <span className={styles.counterText}>{pad(active + 1)} / {pad(GALLERY.length)}</span>
              <div className={styles.dots}>
                {GALLERY.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    aria-label="Go to photo"
                    onClick={() => scrollToIndex(i)}
                    className={`${styles.dot}${i === active ? ` ${styles.dotActive}` : ""}`}
                  />
                ))}
              </div>
            </div>
            <button type="button" aria-label="Next photo" onClick={() => scrollToIndex(Math.min(active + 1, GALLERY.length - 1))} className={styles.arrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={styles.arrowIcon}><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={closeLightbox}
        className={`${styles.lightbox}${lightboxOpen ? ` ${styles.lightboxOpen}` : ""}`}
      >
        <button type="button" aria-label="Close" onClick={closeLightbox} className={styles.lightboxClose}>×</button>
        {lightboxIndex !== null && (
          <img src={GALLERY[lightboxIndex]} alt="Julius and Revia" onClick={(e) => e.stopPropagation()} className={styles.lightboxImage} />
        )}
      </div>
    </section>
  );
}

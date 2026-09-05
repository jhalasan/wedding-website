import { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";

import photo1 from "../assets/_CEP4346.jpg";
import photo2 from "../assets/_CEP4726.jpg";
import photo3 from "../assets/_CEP4889.jpg";
import photo4 from "../assets/_CEP4903.jpg";
import photo5 from "../assets/_CEP5017.jpg";
import photo6 from "../assets/_CEP5111.jpg";
import photo7 from "../assets/_CEP5379.jpg";
import photo8 from "../assets/_CEP5429.jpg";
import photo9 from "../assets/_CEP5438.jpg";
import photo10 from "../assets/_CEP5507.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery">
      <div className="section-head">
        <span className="eyebrow">A Few Favorites</span>
        <h2>Our Story</h2>
        <span className="rule"></span>
      </div>

      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            className={styles.slide}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open photo ${i + 1} of Julius and Revia`}
          >
            <img src={photo} alt="Julius and Revia" loading={i === 0 ? "eager" : "lazy"} />
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollToIndex(Math.max(active - 1, 0))}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <div className={styles.dots}>
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === active ? styles.active : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollToIndex(Math.min(active + 1, photos.length - 1))}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button
            type="button"
            className={styles.close}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={photos[lightboxIndex]}
            alt="Julius and Revia"
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { c, eyebrow, sectionTitle, rule, centeredHead, sectionPad, reveal } from "../theme";
import { GALLERY } from "../data/photos";
import { useReveal } from "../hooks/useReveal";

const SLIDE = "clamp(240px,52vw,460px)";
const SIDE = `calc((100% - ${SLIDE}) / 2)`;
const pad = (n: number) => String(n).padStart(2, "0");

const arrow: React.CSSProperties = {
  width: 42,
  height: 42,
  flex: "0 0 auto",
  border: `1px solid ${c.green}`,
  borderRadius: "50%",
  background: "none",
  color: c.green,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: 0,
  transition: "background .2s ease,color .2s ease",
};

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
    <section ref={sectionRef} id="gallery" style={{ background: c.sand, borderTop: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, padding: sectionPad, ...reveal(visible) }}>
      <div style={{ maxWidth: "74rem", margin: "0 auto" }}>
        <div style={{ ...centeredHead, marginBottom: "clamp(2.2rem,5vw,3.2rem)" }}>
          <span style={eyebrow}>A Few Favorites</span>
          <h2 style={sectionTitle}>Our Story</h2>
          <span style={rule()} />
        </div>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <div
              ref={track}
              className="track"
              onScroll={onScroll}
              style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", scrollbarWidth: "none", padding: `0 ${SIDE}`, gap: 0 }}
            >
              {GALLERY.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  title="View photo"
                  onClick={() => openLightbox(i)}
                  style={{ flex: "0 0 auto", width: SLIDE, scrollSnapAlign: "center", aspectRatio: "4/5", padding: 0, border: "none", background: c.card, cursor: "zoom-in", overflow: "hidden", outline: `1px solid ${c.line}`, outlineOffset: -1 }}
                >
                  <img
                    src={src}
                    alt="Julius and Revia"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: i === active ? "scale(1.05)" : "scale(1)",
                      opacity: i === active ? 1 : 0.82,
                      transition: "transform .5s ease, opacity .5s ease",
                    }}
                  />
                </button>
              ))}
            </div>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: SIDE, pointerEvents: "none", backdropFilter: "blur(7px) saturate(.85)", WebkitBackdropFilter: "blur(7px) saturate(.85)", background: "linear-gradient(to right,rgba(241,236,221,.85),rgba(241,236,221,.5))", borderRight: "1px solid rgba(255,253,247,.65)" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: SIDE, pointerEvents: "none", backdropFilter: "blur(7px) saturate(.85)", WebkitBackdropFilter: "blur(7px) saturate(.85)", background: "linear-gradient(to left,rgba(241,236,221,.85),rgba(241,236,221,.5))", borderLeft: "1px solid rgba(255,253,247,.65)" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginTop: "1.1rem" }}>
            <button type="button" aria-label="Previous photo" onClick={() => scrollToIndex(Math.max(active - 1, 0))} style={arrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} style={{ width: 17, height: 17 }}><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".65rem" }}>
              <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "1.08rem", letterSpacing: ".16em", color: c.sage }}>{pad(active + 1)} / {pad(GALLERY.length)}</span>
              <div style={{ display: "flex", gap: ".45rem", alignItems: "center" }}>
                {GALLERY.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    aria-label="Go to photo"
                    onClick={() => scrollToIndex(i)}
                    style={{
                      width: i === active ? 18 : 6,
                      height: 6,
                      borderRadius: 999,
                      background: i === active ? c.green : c.line,
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "width .3s ease, background .3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
            <button type="button" aria-label="Next photo" onClick={() => scrollToIndex(Math.min(active + 1, GALLERY.length - 1))} style={arrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} style={{ width: 17, height: 17 }}><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={closeLightbox}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "rgba(28,40,27,.94)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(1rem,4vw,2.5rem)",
          opacity: lightboxOpen ? 1 : 0,
          visibility: lightboxOpen ? "visible" : "hidden",
          transition: lightboxOpen ? "opacity .25s ease" : "opacity .25s ease, visibility 0s linear .25s",
        }}
      >
        <button type="button" aria-label="Close" onClick={closeLightbox} style={{ position: "absolute", top: "1.2rem", right: "1.4rem", width: 40, height: 40, border: `1px solid ${c.white}`, borderRadius: "50%", background: "none", color: c.white, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.3rem", lineHeight: 1 }}>×</button>
        {lightboxIndex !== null && (
          <img src={GALLERY[lightboxIndex]} alt="Julius and Revia" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "min(94vw,900px)", maxHeight: "88svh", objectFit: "contain" }} />
        )}
      </div>
    </section>
  );
}

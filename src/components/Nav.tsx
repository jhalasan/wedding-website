import { useEffect, useRef, useState } from "react";
import { c } from "../theme";

const link: React.CSSProperties = {
  fontSize: ".84rem",
  letterSpacing: ".2em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: c.sage,
};

const initial: React.CSSProperties = {
  fontSize: "1.7rem",
  fontWeight: 300,
  fontStyle: "italic",
  letterSpacing: ".02em",
};

export default function Nav() {
  const [hover, setHover] = useState(false);
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
    <nav
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: ".6rem clamp(1rem,4vw,3rem)",
        background: "rgba(250,247,240,.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${c.line}`,
      }}
    >
      <a href="#top" onClick={closeMenu} style={{ display: "flex", alignItems: "center", gap: ".7rem", padding: ".2rem .1rem", color: c.green, textDecoration: "none" }}>
        <span style={{ display: "flex", alignItems: "baseline", lineHeight: 1, whiteSpace: "nowrap" }}>
          <span style={initial}>J</span>
          <span style={{ fontFamily: "'Mrs Saint Delafield',cursive", fontSize: "2.05rem", color: c.gold, margin: "0 .1em", transform: "translateY(.1em)" }}>&amp;</span>
          <span style={initial}>R</span>
        </span>
        <span style={{ width: 1, height: 26, background: "linear-gradient(rgba(183,154,93,0),rgba(183,154,93,.9),rgba(183,154,93,0))" }} />
        <span style={{ display: "flex", flexDirection: "column", gap: ".22rem", lineHeight: 1 }}>
          <span style={{ fontSize: ".62rem", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600, color: c.gold }}>The Wedding of</span>
          <span style={{ fontSize: ".78rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600, color: c.sage }}>Julius &amp; Revia</span>
        </span>
      </a>
      <div className={`nav-links${open ? " open" : ""}`}>
        <a href="#details" onClick={closeMenu} style={link}>Details</a>
        <a href="#gallery" onClick={closeMenu} style={link}>Gallery</a>
        <a href="#entourage" onClick={closeMenu} style={link}>Entourage</a>
        <a href="#attire" onClick={closeMenu} style={link}>Attire</a>
        <a
          href="#rsvp"
          onClick={closeMenu}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontSize: ".84rem",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: c.white,
            background: hover ? c.ink : c.green,
            padding: ".55rem 1.2rem",
            borderRadius: 999,
            transition: "background .25s ease",
          }}
        >
          RSVP
        </a>
      </div>

      <button
        type="button"
        className="nav-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span style={{ width: 22, height: 1, background: c.green, transition: "transform .25s ease", transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
        <span style={{ width: 22, height: 1, background: c.green, transition: "opacity .25s ease", opacity: open ? 0 : 1 }} />
        <span style={{ width: 22, height: 1, background: c.green, transition: "transform .25s ease", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
      </button>
    </nav>
  );
}

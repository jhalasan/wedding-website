export const c = {
  cream: "#FAF7F0",
  card: "#FFFDF7",
  sand: "#F1ECDD",
  line: "#DCD3BE",
  gold: "#B79A5D",
  goldSoft: "#E7DCBE",
  ink: "#2B3B2A",
  green: "#3F5A3C",
  sage: "#5B6753",
  sageLight: "#7C8F5D",
  mint: "#CFE6D4",
  olive: "#8A7F4A",
  white: "#FFFDF7",
  paleText: "#F1ECDD",
} as const;

export const sectionPad = "clamp(3.5rem,8vw,6.5rem) clamp(1.25rem,5vw,3rem)";
export const script = "'Mrs Saint Delafield',cursive";

export const eyebrow: React.CSSProperties = {
  fontSize: ".86rem",
  letterSpacing: ".3em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: c.green,
};

export const sectionTitle: React.CSSProperties = {
  fontSize: "clamp(2rem,5vw,2.9rem)",
  fontStyle: "italic",
  color: c.ink,
};

export const rule = (color: string = c.gold, width = 64): React.CSSProperties => ({
  width,
  height: 1,
  background: `linear-gradient(to right,transparent,${color},transparent)`,
});

export const centeredHead: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".7rem",
  textAlign: "center",
};

import { useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { c, rule, sectionPad, reveal } from "../theme";
import { FORMSPREE_FORM_ID } from "../config/rsvp";
import { useReveal } from "../hooks/useReveal";

type Attending = "accept" | "decline" | null;

const toggleBase: React.CSSProperties = {
  flex: 1,
  padding: ".9rem 1rem",
  fontSize: ".84rem",
  letterSpacing: ".14em",
  textTransform: "uppercase",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background .25s ease, color .25s ease, border-color .25s ease",
};

const fieldLabel: React.CSSProperties = {
  fontSize: ".8rem",
  letterSpacing: ".2em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: c.goldSoft,
  textAlign: "left",
};

const errorText: React.CSSProperties = { fontSize: ".9rem", color: c.goldSoft, fontWeight: 600, margin: 0, textAlign: "left" };

export default function Rsvp() {
  const { ref, visible } = useReveal<HTMLElement>();
  const formId = (FORMSPREE_FORM_ID || "").trim();
  const [state, handleFormspreeSubmit] = useForm(formId || "placeholder");

  const [name, setName] = useState("");
  const [attending, setAttending] = useState<Attending>(null);
  const [guests, setGuests] = useState(1);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!name.trim() || !attending) {
      e.preventDefault();
      setLocalError("Please enter your name and choose a response.");
      return;
    }
    setLocalError(null);
    handleFormspreeSubmit(e);
  };

  return (
    <section ref={ref} id="rsvp" style={{ background: c.green, color: c.white, padding: sectionPad, ...reveal(visible) }}>
      <div style={{ maxWidth: "34rem", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem" }}>
        <span style={{ fontSize: ".86rem", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600, color: c.goldSoft }}>We Await Your Response</span>
        <h2 style={{ fontSize: "clamp(2rem,5vw,2.9rem)", fontStyle: "italic", color: c.white }}>RSVP</h2>
        <span style={rule(c.goldSoft)} />
        <p style={{ fontSize: "clamp(1.15rem,2.6vw,1.35rem)", color: "#EFEBDC", marginTop: ".4rem" }}>Kindly let us know if you'll be able to join us in celebrating our special day.</p>
        <p style={{ fontSize: "1.08rem", color: c.goldSoft }}>
          Please respond on or before <strong style={{ color: c.white, fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>September 10, 2026</strong>
        </p>

        {!formId && (
          <p style={{ fontSize: "1.1rem", color: c.mint, fontStyle: "italic", marginTop: ".6rem" }}>RSVP form is being finalized — check back soon, or ask Juls &amp; Rev directly.</p>
        )}

        {formId && state.succeeded && (
          <div style={{ marginTop: "1.4rem", padding: "2rem clamp(1.4rem,4vw,2.4rem)", background: "rgba(255,253,247,.08)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,253,247,.22)", width: "100%" }}>
            <p style={{ fontSize: "1.3rem", fontStyle: "italic", color: c.white }}>
              Thank you, {name.trim()}!
              <br />
              {attending === "accept" ? "We can't wait to celebrate with you." : "You'll be in our hearts on the day."}
            </p>
          </div>
        )}

        {formId && !state.succeeded && (
          <form onSubmit={handleSubmit} style={{ marginTop: "1.2rem", width: "100%", display: "flex", flexDirection: "column", gap: "1.1rem", padding: "clamp(1.4rem,4vw,2.4rem)", background: "rgba(255,253,247,.08)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,253,247,.22)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <label htmlFor="rsvp-name" style={fieldLabel}>Your full name</label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                style={{ padding: ".85rem 1rem", fontSize: "1.05rem", fontFamily: "inherit", color: c.white, background: "rgba(255,253,247,.06)", border: "1px solid rgba(255,253,247,.35)" }}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} style={errorText} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <span style={fieldLabel}>Will you be joining us?</span>
              <div style={{ display: "flex", gap: ".7rem" }}>
                <button
                  type="button"
                  onClick={() => setAttending("accept")}
                  style={{
                    ...toggleBase,
                    background: attending === "accept" ? c.goldSoft : "transparent",
                    color: attending === "accept" ? c.ink : c.paleText,
                    border: `1px solid ${attending === "accept" ? c.goldSoft : "rgba(255,253,247,.4)"}`,
                  }}
                >
                  Joyfully Accept
                </button>
                <button
                  type="button"
                  onClick={() => setAttending("decline")}
                  style={{
                    ...toggleBase,
                    background: attending === "decline" ? "rgba(255,253,247,.16)" : "transparent",
                    color: c.white,
                    border: `1px solid ${attending === "decline" ? c.white : "rgba(255,253,247,.4)"}`,
                  }}
                >
                  Respectfully Decline
                </button>
              </div>
              <input type="hidden" name="response" value={attending === "accept" ? "Joyfully Accepts" : attending === "decline" ? "Respectfully Declines" : ""} />
            </div>

            {attending === "accept" && (
              <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                <label htmlFor="rsvp-guests" style={fieldLabel}>Number of guests</label>
                <input
                  id="rsvp-guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
                  style={{ width: "5rem", padding: ".65rem .8rem", fontSize: "1.05rem", fontFamily: "inherit", color: c.white, background: "rgba(255,253,247,.06)", border: "1px solid rgba(255,253,247,.35)" }}
                />
              </div>
            )}

            {localError && <p style={errorText}>{localError}</p>}
            <ValidationError errors={state.errors} style={errorText} />

            <button
              type="submit"
              disabled={state.submitting}
              style={{
                fontSize: ".9rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: ".95rem 2.2rem",
                background: state.submitting ? "rgba(255,253,247,.5)" : c.white,
                color: c.ink,
                border: "none",
                cursor: state.submitting ? "not-allowed" : "pointer",
                transition: "background .25s ease",
              }}
            >
              {state.submitting ? "Sending…" : "Submit RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

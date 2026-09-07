import { useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_FORM_ID } from "../config/rsvp";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Rsvp.module.css";

type Attending = "accept" | "decline" | null;
type PlusOne = "yes" | "no" | null;

export default function Rsvp() {
  const { ref, visible } = useReveal<HTMLElement>();
  const formId = (FORMSPREE_FORM_ID || "").trim();
  const [state, handleFormspreeSubmit] = useForm(formId || "placeholder");

  const [name, setName] = useState("");
  const [attending, setAttending] = useState<Attending>(null);
  const [plusOne, setPlusOne] = useState<PlusOne>(null);
  const [plusOneName, setPlusOneName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [attendingError, setAttendingError] = useState(false);
  const [plusOneNameError, setPlusOneNameError] = useState(false);

  const localError =
    nameError && attendingError
      ? "Please enter your name and choose a response."
      : nameError
      ? "Please enter your full name."
      : attendingError
      ? "Please let us know if you'll be joining us."
      : plusOneNameError
      ? "Please enter your plus one's full name."
      : null;

  const handleNameChange = (value: string) => {
    setName(value);
    if (nameError && value.trim()) setNameError(false);
  };

  const handleAttendingChange = (value: Attending) => {
    setAttending(value);
    if (attendingError && value) setAttendingError(false);
    if (value !== "accept") {
      setPlusOne(null);
      setPlusOneName("");
      setPlusOneNameError(false);
    }
  };

  const handlePlusOneChange = (value: PlusOne) => {
    setPlusOne(value);
    if (value !== "yes") {
      setPlusOneName("");
      setPlusOneNameError(false);
    }
  };

  const handlePlusOneNameChange = (value: string) => {
    setPlusOneName(value);
    if (plusOneNameError && value.trim()) setPlusOneNameError(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const missingName = !name.trim();
    const missingAttending = !attending;
    const missingPlusOneName = attending === "accept" && plusOne === "yes" && !plusOneName.trim();
    if (missingName || missingAttending || missingPlusOneName) {
      e.preventDefault();
      setNameError(missingName);
      setAttendingError(missingAttending);
      setPlusOneNameError(missingPlusOneName);
      return;
    }
    handleFormspreeSubmit(e);
  };

  return (
    <section ref={ref} id="rsvp" className={`${styles.section} ${shared.reveal}${visible ? ` ${shared.revealVisible}` : ""}`}>
      <div className={styles.inner}>
        <span className={styles.kicker}>We Await Your Response</span>
        <h2 className={styles.title}>RSVP</h2>
        <span className={shared.ruleLight} />
        <p className={styles.lead}>Kindly let us know if you'll be able to join us in celebrating our special day.</p>
        <p className={styles.deadline}>
          Please respond on or before <strong className={styles.deadlineDate}>September 10, 2026</strong>
        </p>

        {!formId && (
          <p className={styles.pending}>RSVP form is being finalized — check back soon, or ask Juls &amp; Rev directly.</p>
        )}

        {formId && state.succeeded && (
          <div className={styles.panel}>
            <p className={styles.successText}>
              Thank you, {name.trim()}!
              <br />
              {attending === "accept" ? "We can't wait to celebrate with you." : "You'll be in our hearts on the day."}
            </p>
          </div>
        )}

        {formId && !state.succeeded && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="rsvp-name" className={styles.fieldLabel}>Your full name</label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Enter your full name"
                aria-invalid={nameError}
                className={`${styles.input}${nameError ? ` ${styles.inputError}` : ""}`}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.errorText} />
            </div>

            <div className={styles.field}>
              <span className={styles.fieldLabel}>Will you be joining us?</span>
              <div className={styles.toggleRow}>
                <button
                  type="button"
                  onClick={() => handleAttendingChange("accept")}
                  aria-pressed={attending === "accept"}
                  className={`${styles.toggle}${attending === "accept" ? ` ${styles.toggleAccept}` : ""}${attendingError ? ` ${styles.toggleError}` : ""}`}
                >
                  Joyfully Accept
                </button>
                <button
                  type="button"
                  onClick={() => handleAttendingChange("decline")}
                  aria-pressed={attending === "decline"}
                  className={`${styles.toggle}${attending === "decline" ? ` ${styles.toggleDecline}` : ""}${attendingError ? ` ${styles.toggleError}` : ""}`}
                >
                  Respectfully Decline
                </button>
              </div>
              <input type="hidden" name="response" value={attending === "accept" ? "Joyfully Accepts" : attending === "decline" ? "Respectfully Declines" : ""} />
            </div>

            {attending === "accept" && (
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Will you be bringing a plus one?</span>
                <div className={styles.toggleRow}>
                  <button
                    type="button"
                    onClick={() => handlePlusOneChange("yes")}
                    aria-pressed={plusOne === "yes"}
                    className={`${styles.toggle}${plusOne === "yes" ? ` ${styles.toggleAccept}` : ""}`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlusOneChange("no")}
                    aria-pressed={plusOne === "no"}
                    className={`${styles.toggle}${plusOne === "no" ? ` ${styles.toggleDecline}` : ""}`}
                  >
                    No
                  </button>
                </div>
                <input type="hidden" name="plusOne" value={plusOne === "yes" ? "Yes" : "No"} />
              </div>
            )}

            {attending === "accept" && plusOne === "yes" && (
              <div className={styles.field}>
                <label htmlFor="rsvp-plus-one-name" className={styles.fieldLabel}>Plus one's full name</label>
                <input
                  id="rsvp-plus-one-name"
                  name="plusOneName"
                  type="text"
                  value={plusOneName}
                  onChange={(e) => handlePlusOneNameChange(e.target.value)}
                  placeholder="Enter their full name"
                  aria-invalid={plusOneNameError}
                  className={`${styles.input}${plusOneNameError ? ` ${styles.inputError}` : ""}`}
                />
              </div>
            )}

            {localError && <p className={styles.errorText}>{localError}</p>}
            <ValidationError errors={state.errors} className={styles.errorText} />

            <button
              type="submit"
              disabled={state.submitting}
              className={`${styles.submit}${state.submitting ? ` ${styles.submitDisabled}` : ""}`}
            >
              {state.submitting ? "Sending…" : "Submit RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

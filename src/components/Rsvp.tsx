import { useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY, RSVP_CAPACITY, CURRENT_RSVP_COUNT } from "../config/rsvp";
import { useReveal } from "../hooks/useReveal";
import shared from "../styles/shared.module.css";
import styles from "./Rsvp.module.css";

type Attending = "accept" | "decline" | null;
type PlusOne = "yes" | "no" | null;

export default function Rsvp() {
  const { ref, visible } = useReveal<HTMLElement>();
  const accessKey = (WEB3FORMS_ACCESS_KEY || "").trim();
  const capacityReached = CURRENT_RSVP_COUNT >= RSVP_CAPACITY;

  const [name, setName] = useState("");
  const [attending, setAttending] = useState<Attending>(null);
  const [plusOne, setPlusOne] = useState<PlusOne>(null);
  const [plusOneName, setPlusOneName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [attendingError, setAttendingError] = useState(false);
  const [plusOneNameError, setPlusOneNameError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const missingName = !name.trim();
    const missingAttending = !attending;
    const missingPlusOneName = attending === "accept" && plusOne === "yes" && !plusOneName.trim();
    if (missingName || missingAttending || missingPlusOneName) {
      setNameError(missingName);
      setAttendingError(missingAttending);
      setPlusOneNameError(missingPlusOneName);
      return;
    }

    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          response: attending === "accept" ? "Joyfully Accepts" : "Respectfully Declines",
          plusOne: attending === "accept" ? (plusOne === "yes" ? "Yes" : "No") : "No",
          plusOneName: attending === "accept" && plusOne === "yes" ? plusOneName.trim() : "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSucceeded(true);
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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

        {!accessKey && (
          <p className={styles.pending}>RSVP form is being finalized — check back soon, or ask Juls &amp; Rev directly.</p>
        )}

        {accessKey && capacityReached && (
          <p className={styles.pending}>We've reached full capacity for our celebration — thank you to everyone who responded. Please reach out to Juls &amp; Rev directly if you have questions.</p>
        )}

        {accessKey && !capacityReached && succeeded && (
          <div className={styles.panel}>
            <p className={styles.successText}>
              Thank you, {name.trim()}!
              <br />
              {attending === "accept" ? "We can't wait to celebrate with you." : "You'll be in our hearts on the day."}
            </p>
          </div>
        )}

        {accessKey && !capacityReached && !succeeded && (
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
            {serverError && <p className={styles.errorText}>{serverError}</p>}

            <button
              type="submit"
              disabled={submitting}
              className={`${styles.submit}${submitting ? ` ${styles.submitDisabled}` : ""}`}
            >
              {submitting ? "Sending…" : "Submit RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

import styles from "./CoupleMessage.module.css";

export function CoupleMessage() {
  return (
    <section aria-label="A message from the couple">
      <p className={styles.message}>
        "With grateful hearts, we invite you to be part of our story as we begin this new chapter together — as
        husband and wife."
        <span className={styles.who}>Julius &amp; Revia</span>
      </p>
    </section>
  );
}

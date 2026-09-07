import { useEffect, useRef, useState } from "react";
import { BACKGROUND_MUSIC } from "../data/audio";
import styles from "./BackgroundMusic.module.css";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pendingRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const attemptPlay = () => {
    const audio = audioRef.current;
    if (!audio || pendingRef.current || !audio.paused) return;
    pendingRef.current = true;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {})
      .finally(() => { pendingRef.current = false; });
  };

  useEffect(() => {
    attemptPlay();

    window.addEventListener("pointerdown", attemptPlay, { once: true });
    window.addEventListener("keydown", attemptPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      attemptPlay();
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={BACKGROUND_MUSIC} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className={styles.button}
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={styles.icon}>
            <circle cx="12" cy="12" r="9" />
            <path d="M10 9v6M14 9v6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={styles.icon}>
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </>
  );
}

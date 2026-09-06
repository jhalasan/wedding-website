import { useEffect, useState } from "react";

export const WEDDING_AT = new Date("2026-09-26T14:30:00+08:00").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

export type Unit = { value: string; label: string };

export function useCountdown(target: number = WEDDING_AT): Unit[] {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.floor(Math.max(target - now, 0) / 1000);
  return [
    { value: String(Math.floor(s / 86400)), label: "Days" },
    { value: pad(Math.floor(s / 3600) % 24), label: "Hours" },
    { value: pad(Math.floor(s / 60) % 60), label: "Minutes" },
    { value: pad(s % 60), label: "Seconds" },
  ];
}

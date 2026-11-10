"use client";

import { useEffect, useState } from "react";

export default function Countdown({ dateISO }: { dateISO: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(dateISO).getTime();
    const update = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86_400_000)));
    update();
    const id = setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, [dateISO]);

  if (days === null) return <p className="countdown" aria-hidden="true" />;
  if (days === 0) return <p className="countdown">I dag er dagen!</p>;
  return <p className="countdown">{days} {days === 1 ? "dag" : "dager"} igjen</p>;
}

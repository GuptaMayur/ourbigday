import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-05-12T00:00:00");

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export default function WeddingCountdown() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) { setDone(true); return; }
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (done) {
    return (
      <p className="font-display text-yellow-400 text-xl mt-6 tracking-widest">
        आज का शुभ दिन है !
      </p>
    );
  }

  const boxes = [
    { val: time.d, label: "दिन" },
    { val: time.h, label: "घंटे" },
    { val: time.m, label: "मिनट" },
    { val: time.s, label: "सेकंड" },
  ];

  return (
    <div className="mt-6 flex items-center justify-center gap-1.5">
      {boxes.map(({ val, label }, i) => (
        <>
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-xl"
            style={{
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,215,0,0.35)",
              width: "60px",
              height: "56px",
              flexShrink: 0,
            }}
          >
            <span
              className="font-display text-2xl leading-none"
              style={{ color: "#FFD700" }}
            >
              {val}
            </span>
            <span
              className="text-[9px] tracking-widest mt-1"
              style={{ color: "#c9984a", fontFamily: "inherit" }}
            >
              {label}
            </span>
          </div>

          {i < 3 && (
            <span
              key={`sep-${i}`}
              className="font-bold"
              style={{ color: "#FFD700", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}
            >
              :
            </span>
          )}
        </>
      ))}
    </div>
  );
}
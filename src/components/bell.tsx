import { useState, useEffect } from "react";

export default function Bell() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [angle, setAngle] = useState(0);

  // 🔁 simulate left-right swing
  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      setAngle((prev) => {
        if (prev > 6) direction = -1;
        if (prev < -6) direction = 1;
        return prev + direction * 1.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 400);
  };

  return (
    <div
      style={{
        fontSize: "100px",
        cursor: "pointer",
        display: "inline-block",
        transformOrigin: "top center",
        filter: hover
          ? "drop-shadow(0 0 18px rgba(255,215,0,1))"
          : "drop-shadow(0 0 8px rgba(255,215,0,0.6))",
        transform: click
          ? "rotate(12deg)"
          : `rotate(${angle}deg) scale(${hover ? 1.12 : 1})`,
        transition: click ? "transform 0.2s ease" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      🔔
    </div>
  );
}
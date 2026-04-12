import { useEffect, useRef } from "react";

/**
 * Updates a CSS variable --scroll-zoom on the root element based on scroll position.
 * It also dispatches a custom "celebrate" event when a fast scroll or click happens.
 */
const ScrollEffects = () => {
  const lastY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const h = window.innerHeight || 800;
      // map scroll progress 0..h to zoom 0..0.12
      const progress = Math.min(1, y / h);
      const zoom = (progress * 0.12).toFixed(4);
      root.style.setProperty("--scroll-zoom", zoom);

      // parallax translate var
      const translate = Math.min(40, progress * 40).toFixed(2);
      root.style.setProperty("--scroll-translate", `${translate}px`);

      // detect scroll speed for celebration trigger
      const now = Date.now();
      const dy = Math.abs(y - lastY.current);
      const dt = Math.max(1, now - lastTime.current);
      const speed = dy / dt; // px per ms
      lastY.current = y;
      lastTime.current = now;

      // if user scrolls quickly, dispatch a small celebration event
      if (speed > 1.0) {
        window.dispatchEvent(new CustomEvent("celebrate", { detail: { burst: true } }));
      }
    };

    const onClick = (e: MouseEvent) => {
      // ignore clicks on interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName.toLowerCase();
      if (["a", "button", "input", "textarea", "select"].includes(tag)) return;

      // normal click triggers celebration and small zoom pulse
      window.dispatchEvent(new CustomEvent("celebrate", { detail: { burst: false } }));
      window.dispatchEvent(new CustomEvent("playBell"));

      // quick pulse: temporarily increase zoom CSS var
      const prev = parseFloat(root.style.getPropertyValue("--scroll-zoom") || "0");
      root.style.setProperty("--scroll-zoom", String(Math.min(0.28, prev + 0.08)));
      setTimeout(() => {
        // restore from current scroll position
        const y = window.scrollY || window.pageYOffset;
        const h = window.innerHeight || 800;
        const progress = Math.min(1, y / h);
        const zoom = (progress * 0.12).toFixed(4);
        root.style.setProperty("--scroll-zoom", zoom);
      }, 450);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return null;
};

export default ScrollEffects;

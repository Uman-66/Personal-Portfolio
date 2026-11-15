"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary';

/**
 * A soft halo that trails the real pointer. The native cursor stays visible and
 * functional — this only adds a glow that swells over interactive elements.
 */
export default function CursorHalo() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 170, damping: 26, mass: 0.6, restDelta: 0.001 });
  const sy = useSpring(y, { stiffness: 170, damping: 26, mass: 0.6, restDelta: 0.001 });
  const frame = useRef(0);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_POINTER_QUERY);
    const sync = () => setEnabled(query.matches && !reduce);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      if (frame.current) return;

      frame.current = requestAnimationFrame(() => {
        x.set(event.clientX);
        y.set(event.clientY);
        setVisible(true);
        const target = event.target instanceof Element ? event.target : null;
        setHot(Boolean(target?.closest(INTERACTIVE)));
        frame.current = 0;
      });
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-halo"
      style={{ left: sx, top: sy, opacity: visible ? 1 : 0 }}
      animate={{ scale: hot ? 1.9 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      data-hot={hot ? "true" : "false"}
    />
  );
}

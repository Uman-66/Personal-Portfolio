"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let frame = 0;
    const move = (event: MouseEvent) => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      ringX += (event.clientX - ringX) * 0.18;
      ringY += (event.clientY - ringY) * 0.18;
    };
    const setHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      ringRef.current?.classList.toggle("is-hovering", Boolean(target?.closest("a, button")));
    };
    const animate = () => {
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", setHoverState, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", setHoverState);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

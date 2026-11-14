"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: reduce ? 0.01 : 0.35 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
          }
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-[3px] border border-[var(--line-strong)] bg-[var(--paper-2)] text-[var(--ink)] transition-colors hover:border-[var(--mark)] hover:text-[var(--mark)]"
        >
          <ArrowUp size={16} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

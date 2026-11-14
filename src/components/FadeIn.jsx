"use client";
import { motion, useReducedMotion } from "framer-motion";

const directionOffsets = {
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.12 }}
      transition={{
        duration: reduce ? 0.01 : 1.35,
        ease: [0.16, 1, 0.3, 1],
        delay: reduce ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

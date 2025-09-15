"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}


"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "up" | "down";
}

export default function AnimatedSection({ 
  children, 
  direction = "up" 
}: AnimatedSectionProps) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }} 
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    </div>
  );
}
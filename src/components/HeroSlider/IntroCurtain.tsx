import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const curtainVariant = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1.2,
      ease: [0.86, 0, 0.07, 1], // A sharp, elegant ease-out
    },
  },
  exit: {
    scaleY: 1,
  },
};

interface IntroCurtainProps {
  onAnimationComplete: () => void;
}

const IntroCurtain: React.FC<IntroCurtainProps> = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      style={{ transformOrigin: "top" }}
      variants={curtainVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
    />
  );
};

export default IntroCurtain;

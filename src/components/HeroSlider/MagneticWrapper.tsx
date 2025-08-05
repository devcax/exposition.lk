import { useRef, ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticWrapperProps {
  children: ReactNode;
}

const MagneticWrapper = ({ children }: MagneticWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const spring = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;

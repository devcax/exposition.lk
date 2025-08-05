import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Slide } from "../../config/slider.config";

interface SliderContentProps {
  slideData: Slide;
  direction: number;
}

const contentVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 50 : -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.15 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -50 : 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SliderContent: React.FC<SliderContentProps> = ({
  slideData,
  direction,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      key={slideData.id}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={direction}
      className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-12"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center w-full"
        style={{ maxHeight: "25vh" }}
      >
        <img
          src={slideData.logo}
          alt={`${slideData.subtitle} Logo`}
          className="h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 w-auto object-contain drop-shadow-2xl mx-auto"
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="space-y-4 md:space-y-6 lg:space-y-8 max-w-3xl lg:max-w-4xl xl:max-w-5xl"
      >
        <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#f1b759] font-light tracking-widest drop-shadow-lg leading-tight">
          {slideData.subtitle}
        </h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 mx-auto leading-loose font-light drop-shadow-md max-w-2xl lg:max-w-3xl">
          {slideData.description}
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center"
      >
        <motion.a
          href={slideData.cta.primary.href}
          className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#f1b759] text-black px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-sm font-medium tracking-wide shadow-lg text-base md:text-lg"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#f1b759] via-[#d1a93a] to-[#f1b759] opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <span className="relative z-10">{slideData.cta.primary.text}</span>
          <motion.div
            className="relative z-10"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </motion.div>
        </motion.a>
        <motion.button
          onClick={() => navigate(slideData.cta.secondary.href)}
          className="group relative overflow-hidden inline-flex items-center gap-3 border border-white/50 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-sm font-medium tracking-wide backdrop-blur-sm shadow-lg text-base md:text-lg"
          whileHover={{
            scale: 1.05,
            y: -2,
            borderColor: "#f1b759",
            boxShadow:
              "0 20px 25px -5px rgba(241, 183, 89, 0.2), 0 10px 10px -5px rgba(241, 183, 89, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[#f1b759] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0, borderRadius: "50%" }}
            whileHover={{ scale: 1, borderRadius: "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.span
            className="relative z-10"
            whileHover={{ color: "#000" }}
            transition={{ duration: 0.2 }}
          >
            {slideData.cta.secondary.text}
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SliderContent;

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import logoImg from "../assets/images/logo.png";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3500;
    const interval = 30;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
      } else {
        setProgress(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.img
        src={logoImg}
        alt="Ezra Collective"
        className="w-48 sm:w-64 lg:w-80 h-auto object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Progress Bar */}
      <motion.div
        className="mt-10 w-48 sm:w-64 h-0.5 bg-neutral-800 rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-orange-brand rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      <motion.div
        className="mt-6 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-orange-brand animate-pulse" />
        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
          Loading Experience
        </span>
        <span className="text-xs font-mono text-gray-600 tracking-widest">
          {Math.round(progress)}%
        </span>
      </motion.div>
    </motion.div>
  );
}

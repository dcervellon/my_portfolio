'use client';
import { motion } from 'framer-motion';

const Animation = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;

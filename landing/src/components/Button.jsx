import React from "react";
import { motion } from "framer-motion"

const Button = ({ styles }) => (
  <motion.button 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Sign up
  </motion.button>
);

export default Button;


import React from "react";
import { motion } from "framer-motion"

interface IProps {
  text: string;
  styles?: string;
}

export const Button: React.FC<IProps> = (props) => {

  const {
    text,
    styles,
  } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-[#00F6FF] rounded-[10px] outline-none ${ styles } `}
    >
      { text }
    </motion.button>
  );

};



import { apple, google } from "../../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <div style={ { display: "flex", flexDirection: "row", paddingTop: "20px", gap: "25px", zIndex: "5" } }>
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
    >
    <a href="https://app.proximafitness.com/">
      <img src={apple} alt="apple" style={ { width: "150px", height: "80px" }} />
    </a>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
    >
    <a href="https://app.proximafitness.com/">
        <img src={google} alt="google" style={ { width: "150px", height: "80px" }} />
    </a>
  </motion.div>
</div>
);

export default GetStarted;



import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <a href="https://app.proximafitness.com/" className={`${styles.flexCenter} w-[200px] h-[80px] bg-blue-gradient p-[2px] cursor-pointer`} style={{ borderRadius: "19px" }}>
    <div 
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] `} style={{ borderRadius: "19px" }}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Join our Beta</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient"></span>
      </p>
    </div>
  </a>
);

export default GetStarted;


import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The world's best, <br className="sm:block hidden" /> Fitness Companion.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Integrate social <span className="text-white">connectivity</span> with personalized <span className="text-white">workout tracking</span>.
       Upload <span className="text-white">screenshots</span> of workouts, converted into <span className="text-white">saved workouts</span> by <span className="text-white">AI</span>.
        Create workouts, history, and do <span className="text-white">real-time tracking with timers</span>.
         Social Fitness serves as a visual fitness <span className="text-white">portfolio</span>. This app not only <span className="text-white">enhances</span> workouts but also fosters a supportive <span className="text-white">community</span>.






      </p>

      <a href="https://socialfitness-29753.web.app/"><Button  styles={`mt-10`} /></a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

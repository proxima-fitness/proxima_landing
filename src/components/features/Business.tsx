
import { programs_mobile_white_device, wave } from "../../assets";
import { features } from "../../assets/constants/index";
import styles, { layout } from "../../style";
import { Button } from "../generic/Button";
import { motion } from "framer-motion";

// const FeatureCard = ({ icon, title, content, index }: any) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     onHoverStart={e => {}}
//     onHoverEnd={e => {}}
//     className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
//   >

// <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>

//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </motion.div>
// );

const FeatureCard = ({ icon, title, content, index }: any) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      className={`transtion group bg-gradient-to-r from-[#00F6FF] via-white to-[#33bbcf] p-[4px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#00F6FF]-600/30 relative p-[4px] rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}
    >
      <div className="relative z-10 flex flex-row p-6 rounded-[20px] bg-black">
        <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue flex items-center justify-center`}>
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
      </div>
    </motion.div>

  );


const Business = () =>  (
  <section id="programs" className={layout.section} data-aos="fade-up"
  data-aos-anchor-placement="top-bottom" data-aos-once="true"
>

      <div className={layout.sectionInfoCentered}>
      <h2 className={styles.heading2WhiteSection}>
      Train Popular <span style={ { color: "#33bbcf" } }>Science Based</span> Programs
      </h2>
      <img src={ programs_mobile_white_device } alt="Program Creator Image" className="relative z-[6] ss:max-w-[280px] max-w-[220px] pt-20 h-auto"/>
      {/* Ever wanted to <span className="text-white">flex</span> your <span className="text-white">PR's</span>,
      have a place where you can share <span className="text-white">workouts</span> and track
      your <span className="text-white">gains</span> effortlessly. */}

    </div>

    <div className={`${layout.sectionImg} flex-col ss:pt-48 pt-10 `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
        <a href="https://app.proximafitness.com/"><Button text={ "View Programs" } styles={`mt-10`} /></a>
    </div>

  </section>
);

export default Business;


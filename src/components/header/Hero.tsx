
import styles from "../../style";
import GetStarted from "./GetStarted";
import programs_classic_device from "../../../public/programs-classic-device.png";
import program_creator_white from "../../../public/program-creator-white.png";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up"
        data-aos-duration="2500" data-aos-once="true">
        { /* <a href="https://app.proximafitness.com/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Sign up</span> to our Beta now for <span className="text-white">Free</span> Proxima Pro on release
          </p>
        </motion.div>
        </a>*/}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-main font-semibold ss:text-[55px] text-[38px] ss:text-left text-center text-white ">
            Leave No Gains<br className="sm:block hidden" />{" "}
            <span style={ { color: "#00F6FF" } }>On The Table</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraphHero} max-w-[470px] mt-5 pb-4 text-center ss:text-left`}>
        Create, share and follow <span className="text-white">Expert Programs</span> on our Platform. Flex your <span className="text-white">Personal Records</span> and track with <span className="text-white">AI Enhanced Features</span>.
        </p>
          <GetStarted />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mt-24 mb-10 relative`} >
        <img src={ program_creator_white } alt="Program Creator Image" className="relative z-[5]"/>
        <div className="hidden md:block">
            <img src={ programs_classic_device } alt="Profile Page Image" className="absolute z-[6] max-w-[160px] h-auto -inset-10 top-16"/>
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;


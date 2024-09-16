
import styles from "../../style";
import { profile_mobile_device_white, program_creator_white } from "../../assets";
import GetStarted from "./GetStarted";

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
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[52px] text-white ">
            Maximize gains,<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Minimize guesswork</span>{" "}
          </h1>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A Dashboard for your <span className="text-white">Personal Records</span>.<br/>Create, share and track <span className="text-white">Programs</span> on our Platform.
        </p>
          <GetStarted />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
        <img src={ program_creator_white } alt="Program Creator Image" className="relative z-[5]"/>
        <div className="hidden md:block">
            <img src={ profile_mobile_device_white } alt="Profile Page Image" className="absolute z-[6] max-w-[160px] h-auto -inset-10 top-16"/>
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


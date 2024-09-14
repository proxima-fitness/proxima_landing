
import styles from "../../style";
import { Logo } from "../../assets";
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
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Built by the Strong<br className="sm:block hidden" />{" "}
            <span className="text-gradient">for the Stronger</span>{" "}
          </h1>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A <span className="text-white">Dashboard</span> for your Personal Records.<p></p><p></p>Create, share and track Programs on our<span className="text-white"> Platform</span>.
        </p>
        <div>
          <GetStarted />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="gym" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <img src={ Logo } alt="Social Fitness Logo" className="w-[90%] h-[100%] relative z-[5]"/>
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


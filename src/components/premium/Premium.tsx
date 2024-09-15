import styles, { layout } from "../../style";

const Premium = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Upgrade to Premium <br className="sm:block hidden" /> for added Features.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Upgrade to the premium version of Proxima Fitness for exclusive access to advanced analytics, personalized training insights, maximizing your fitness journey with enhanced features and convenience.
      </p>
    </div>
  </section>
);

export default Premium;
